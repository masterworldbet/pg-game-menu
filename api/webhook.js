const crypto = require("crypto");

const LINE_REPLY_API = "https://api.line.me/v2/bot/message/reply";

const games = [
  { id: "game-001.webp", name: "FUNKY FORTUNEZ", score: 99 },
  { id: "game-002.webp", name: "MONKEYS WILD PARTY", score: 98 },
  { id: "game-003.webp", name: "MYTHICAL GUARDIANS", score: 96 },
  { id: "game-004.webp", name: "PERFECT STRIKE", score: 95 },
  { id: "game-005.webp", name: "ZOMBIE BLASTERS", score: 90 },
  { id: "game-006.webp", name: "SUPER WILDRIX", score: 89 },
  { id: "game-007.webp", name: "MIGHTY MANIA", score: 88 },
  { id: "game-008.webp", name: "FORBIDDEN ALCHEMY", score: 87 },
  { id: "game-009.webp", name: "FORTUNE HORSE", score: 86 },
  { id: "game-010.webp", name: "MAYAN DESTINY", score: 85 },
  { id: "game-011.webp", name: "INFERNO MAYHEM", score: 83 },
  { id: "game-012.webp", name: "REEL ROYALE SHOWDOWN", score: 82 },
];

const SIGNUP_URL =
  "https://masterworldbet.com/sign-up?ref_agent=1feacd0466b9&ref_zean=0977AB59420F";

function clampScore(score) {
  return Math.max(0, Math.min(100, Number(score) || 0));
}

function createBubble(game) {
  const score = clampScore(game.score);
  const filled = Math.max(1, Math.round(score / 10));
  const empty = 10 - filled;

  return {
    type: "bubble",
    size: "micro",
    hero: {
      type: "image",
      url: `https://raw.githubusercontent.com/masterworldbet/pg-game-menu/main/images/${game.id}`,
      size: "full",
      aspectRatio: "1:1",
      aspectMode: "cover",
    },
    body: {
      type: "box",
      layout: "vertical",
      backgroundColor: "#07111F",
      paddingAll: "10px",
      spacing: "sm",
      contents: [
        {
          type: "text",
          text: game.name,
          weight: "bold",
          size: "sm",
          color: "#FFFFFF",
          wrap: true,
          maxLines: 2,
        },
        {
          type: "box",
          layout: "horizontal",
          alignItems: "center",
          spacing: "sm",
          contents: [
            {
              type: "text",
              text: "DEMO SCORE",
              size: "xxs",
              color: "#8F9AAF",
              flex: 1,
            },
            {
              type: "text",
              text: `${score}%`,
              size: "lg",
              weight: "bold",
              color: "#B94CFF",
              align: "end",
            },
          ],
        },
        {
          type: "box",
          layout: "horizontal",
          spacing: "xs",
          contents: [
            ...Array.from({ length: filled }, () => ({
              type: "box",
              layout: "vertical",
              backgroundColor: "#B94CFF",
              height: "5px",
              flex: 1,
              cornerRadius: "3px",
            })),
            ...Array.from({ length: empty }, () => ({
              type: "box",
              layout: "vertical",
              backgroundColor: "#263044",
              height: "5px",
              flex: 1,
              cornerRadius: "3px",
            })),
          ],
        },
        {
          type: "text",
          text: "DEMO UI",
          size: "xxs",
          color: "#69758B",
          align: "center",
        },
      ],
    },
    footer: {
      type: "box",
      layout: "vertical",
      backgroundColor: "#07111F",
      paddingAll: "10px",
      contents: [
        {
          type: "button",
          style: "primary",
          height: "sm",
          color: "#7A42D8",
          action: {
            type: "uri",
            label: "เข้าเกม",
            uri: SIGNUP_URL,
          },
        },
      ],
    },
  };
}

function createFlexMessage() {
  return {
    type: "flex",
    altText: "MASTER WORLD GAME MENU",
    contents: {
      type: "carousel",
      contents: games.map(createBubble),
    },
  };
}

function verifySignature(rawBody, signature, channelSecret) {
  if (!signature || !channelSecret) return false;

  const expected = crypto
    .createHmac("sha256", channelSecret)
    .update(rawBody)
    .digest("base64");

  const actualBuffer = Buffer.from(signature, "utf8");
  const expectedBuffer = Buffer.from(expected, "utf8");

  if (actualBuffer.length !== expectedBuffer.length) return false;

  return crypto.timingSafeEqual(actualBuffer, expectedBuffer);
}

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];

    req.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
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
      if (event.type !== "follow" || !event.replyToken) continue;

      await replyToLine(event.replyToken, createFlexMessage());
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
