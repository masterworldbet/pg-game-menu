const crypto = require("crypto");

const LINE_REPLY_API = "https://api.line.me/v2/bot/message/reply";
const GAMES_JSON_URL =
  "https://raw.githubusercontent.com/masterworldbet/pg-game-menu/main/games.json";

const IMAGE_BASE =
  "https://raw.githubusercontent.com/masterworldbet/pg-game-menu/main/images/";

const FALLBACK_GAMES = Array.from({ length: 170 }, (_, i) => ({
  id: i + 1,
  image: `game-${String(i + 1).padStart(3, "0")}.webp`,
  url: "https://masterworldbet.com/games/slot",
  tags: [],
}));

function verifySignature(rawBody, signature, channelSecret) {
  if (!signature || !channelSecret) return false;

  const expected = crypto
    .createHmac("sha256", channelSecret)
    .update(rawBody)
    .digest("base64");

  const a = Buffer.from(signature, "utf8");
  const b = Buffer.from(expected, "utf8");

  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];

    req.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

async function loadGames() {
  try {
    const response = await fetch(GAMES_JSON_URL, {
      headers: { "cache-control": "no-cache" },
    });

    if (!response.ok) {
      throw new Error(`games.json returned ${response.status}`);
    }

    const games = await response.json();

    if (!Array.isArray(games) || games.length === 0) {
      throw new Error("games.json is empty or invalid");
    }

    return games.filter((game) => game && game.image);
  } catch (error) {
    console.error("games.json load failed, using fallback:", error);
    return FALLBACK_GAMES;
  }
}

function getTimePeriod() {
  // Thailand time (UTC+7)
  const hour = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Bangkok",
      hour: "numeric",
      hour12: false,
    }).format(new Date())
  );

  if (hour >= 6 && hour < 12) {
    return { key: "morning", label: "ช่วงเช้า" };
  }

  if (hour >= 12 && hour < 17) {
    return { key: "day", label: "ช่วงกลางวัน" };
  }

  if (hour >= 17 && hour < 22) {
    return { key: "evening", label: "ช่วงเย็น" };
  }

  return { key: "night", label: "ช่วงดึก" };
}

function shuffle(items) {
  const array = [...items];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function getRecommendedGames(games, periodKey) {
  /*
   * ใช้เกมทั้งหมดจาก games.json ที่มีอยู่ใน Repo
   * แบ่ง pool ตามช่วงเวลาแบบ deterministic จาก game id
   * และให้น้ำหนักเกมที่มี tag "popular" / "hit" มากกว่า
   * จากนั้นสุ่มเลือก 5 เกมทุกครั้งที่กด Rich Menu
   */

  const periodIndex = {
    morning: 0,
    day: 1,
    evening: 2,
    night: 3,
  }[periodKey];

  const validGames = games.filter((game) => game.image);

  const periodPool = validGames.filter((game) => {
    const id = Number(game.id);
    return Number.isFinite(id) && ((id - 1) % 4 === periodIndex);
  });

  const pool = periodPool.length >= 5 ? periodPool : validGames;

  const popular = pool.filter(
    (game) =>
      Array.isArray(game.tags) &&
      (game.tags.includes("popular") || game.tags.includes("hit"))
  );

  const normal = pool.filter((game) => !popular.includes(game));

  // ให้เกมที่ติด tag มีโอกาสถูกเลือกมากกว่า แต่ยังสุ่มทุกครั้ง
  const weightedPool = [
    ...shuffle(popular),
    ...shuffle(popular),
    ...shuffle(normal),
  ];

  const selected = [];
  const used = new Set();

  for (const game of weightedPool) {
    const key = String(game.id ?? game.image);

    if (used.has(key)) continue;

    used.add(key);
    selected.push(game);

    if (selected.length === 5) break;
  }

  // กรณี pool เล็กผิดปกติ เติมจากเกมทั้งหมด
  if (selected.length < 5) {
    for (const game of shuffle(validGames)) {
      const key = String(game.id ?? game.image);

      if (used.has(key)) continue;

      used.add(key);
      selected.push(game);

      if (selected.length === 5) break;
    }
  }

  return selected;
}

function randomScore() {
  // ค่า UI ทดลอง ไม่ใช่อัตราชนะจริง
  return Math.floor(Math.random() * 40) + 60; // 60-99
}

function getGameUrl(game) {
  if (
    typeof game.url === "string" &&
    /^https:\/\//i.test(game.url) &&
    !game.url.includes("example.com")
  ) {
    return game.url;
  }

  return "https://masterworldbet.com/games/slot";
}

function createBubble(game) {
  const score = randomScore();

  const filled = Math.max(1, score);
  const empty = Math.max(1, 100 - score);

  return {
    type: "bubble",
    size: "micro",

    hero: {
      type: "image",
      url: `${IMAGE_BASE}${game.image}`,
      size: "full",
      aspectRatio: "3:4",
      aspectMode: "cover",
    },

    body: {
      type: "box",
      layout: "vertical",
      paddingAll: "9px",
      backgroundColor: "#07111F",
      spacing: "xs",

      contents: [
        {
          type: "box",
          layout: "horizontal",
          margin: "sm",
          contents: [
            {
              type: "text",
              text: "SCORE",
              size: "xxs",
              color: "#91A2BD",
              flex: 1,
            },
            {
              type: "text",
              text: `${score}%`,
              size: "md",
              weight: "bold",
              color: "#E9C8FF",
              align: "end",
            },
          ],
        },

        {
          type: "box",
          layout: "horizontal",
          height: "8px",
          cornerRadius: "4px",
          backgroundColor: "#17233A",
          paddingAll: "1px",
          contents: [
            {
              type: "box",
              layout: "vertical",
              flex: filled,
              height: "6px",
              cornerRadius: "3px",
              backgroundColor: "#B94CFF",
              contents: [],
            },
            {
              type: "box",
              layout: "vertical",
              flex: empty,
              height: "6px",
              contents: [],
            },
          ],
        },

        {
          type: "text",
          text: "โอกาสชนะ",
          size: "xxs",
          color: "#71819A",
          align: "end",
          margin: "xs",
        },
      ],
    },

    footer: {
      type: "box",
      layout: "vertical",
      backgroundColor: "#07111F",
      paddingAll: "9px",
      contents: [
        {
          type: "box",
          layout: "vertical",
          height: "40px",
          cornerRadius: "20px",
          backgroundColor: "#8B2CF5",
          paddingAll: "1px",
          action: {
            type: "uri",
            uri: getGameUrl(game),
          },
          contents: [
            {
              type: "box",
              layout: "vertical",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              cornerRadius: "19px",
              backgroundColor: "#B94CFF",
              contents: [
                {
                  type: "text",
                  text: "⚡ เข้าเล่นตอนนี้",
                  size: "sm",
                  weight: "bold",
                  color: "#FFFFFF",
                  align: "center",
                },
              ],
            },
          ],
        },
      ],
    },
  };
}

async function createFlexMessage() {
  const games = await loadGames();
  const period = getTimePeriod();
  const selected = getRecommendedGames(games, period.key);

  return {
    type: "flex",
    altText: `เกมแนะนำ ${period.label}`,
    contents: {
      type: "carousel",
      contents: selected.map(createBubble),
    },
  };
}

async function replyToLine(replyToken, message) {
  const response = await fetch(LINE_REPLY_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      replyToken,
      messages: [message],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`LINE API ${response.status}: ${errorText}`);
  }
}

function isGameMenuMessage(event) {
  if (event.type !== "message") return false;
  if (event.message?.type !== "text") return false;

  const text = String(event.message.text || "").trim().toLowerCase();

  return [
    "เกมส์แตกเวลานี้",
    "เกมแตกเวลานี้",
    "เกมส์แนะนำ",
    "เกมแนะนำ",
    "เมนู",
  ].includes(text);
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("LINE webhook is running");
  }

  try {
    const rawBody = await readRawBody(req);
    const signature = req.headers["x-line-signature"];

    if (
      !verifySignature(
        rawBody,
        signature,
        process.env.LINE_CHANNEL_SECRET
      )
    ) {
      return res.status(401).send("Invalid signature");
    }

    const payload = JSON.parse(rawBody.toString("utf8"));
    const events = Array.isArray(payload.events) ? payload.events : [];

    for (const event of events) {
      if (!event.replyToken) continue;

      // คนเพิ่มเพื่อนใหม่
      if (event.type === "follow") {
        await replyToLine(event.replyToken, await createFlexMessage());
        continue;
      }

      // คนที่เป็นเพื่อนอยู่แล้วกด Rich Menu
      // โดยตั้ง Rich Menu action เป็น Message:
      // "เกมส์แตกเวลานี้"
      if (isGameMenuMessage(event)) {
        await replyToLine(event.replyToken, await createFlexMessage());
      }
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return res.status(500).json({ ok: false });
  }
};

module.exports.config = {
  api: {
    bodyParser: false,
  },
};
