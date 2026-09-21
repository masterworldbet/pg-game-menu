const crypto = require("crypto");

const LINE_REPLY_API = "https://api.line.me/v2/bot/message/reply";

const FLEX_CAROUSEL = {
  "type": "carousel",
  "contents": [
    {
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://raw.githubusercontent.com/masterworldbet/pg-game-menu/main/images/game-006.webp",
        "size": "full",
        "aspectRatio": "3:4",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "9px",
        "backgroundColor": "#07111F",
        "spacing": "xs",
        "contents": [
          {
            "type": "text",
            "text": "FUNKY FORTUNEZ",
            "weight": "bold",
            "size": "sm",
            "color": "#FFFFFF",
            "wrap": true,
            "maxLines": 2
          },
          {
            "type": "box",
            "layout": "horizontal",
            "margin": "sm",
            "contents": [
              {
                "type": "text",
                "text": "DEMO SCORE",
                "size": "xxs",
                "color": "#91A2BD",
                "flex": 1
              },
              {
                "type": "text",
                "text": "99%",
                "size": "md",
                "weight": "bold",
                "color": "#E9C8FF",
                "align": "end"
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "height": "8px",
            "cornerRadius": "4px",
            "backgroundColor": "#17233A",
            "paddingAll": "1px",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 99,
                "height": "6px",
                "cornerRadius": "3px",
                "backgroundColor": "#B94CFF",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "height": "6px",
                "contents": []
              }
            ]
          },
          {
            "type": "text",
            "text": "DEMO UI",
            "size": "xxs",
            "color": "#71819A",
            "align": "end",
            "margin": "xs"
          },
          {
            "type": "button",
            "style": "primary",
            "height": "sm",
            "color": "#7A42D8",
            "action": {
              "type": "uri",
              "label": "เข้าเกม",
              "uri": "https://masterworldbet.com/sign-up?ref_agent=1feacd0466b9&ref_zean=0977AB59420F"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://raw.githubusercontent.com/masterworldbet/pg-game-menu/main/images/game-001.webp",
        "size": "full",
        "aspectRatio": "3:4",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "9px",
        "backgroundColor": "#07111F",
        "spacing": "xs",
        "contents": [
          {
            "type": "text",
            "text": "MONKEYS WILD PARTY",
            "weight": "bold",
            "size": "sm",
            "color": "#FFFFFF",
            "wrap": true,
            "maxLines": 2
          },
          {
            "type": "box",
            "layout": "horizontal",
            "margin": "sm",
            "contents": [
              {
                "type": "text",
                "text": "DEMO SCORE",
                "size": "xxs",
                "color": "#91A2BD",
                "flex": 1
              },
              {
                "type": "text",
                "text": "98%",
                "size": "md",
                "weight": "bold",
                "color": "#E9C8FF",
                "align": "end"
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "height": "8px",
            "cornerRadius": "4px",
            "backgroundColor": "#17233A",
            "paddingAll": "1px",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 98,
                "height": "6px",
                "cornerRadius": "3px",
                "backgroundColor": "#B94CFF",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 2,
                "height": "6px",
                "contents": []
              }
            ]
          },
          {
            "type": "text",
            "text": "DEMO UI",
            "size": "xxs",
            "color": "#71819A",
            "align": "end",
            "margin": "xs"
          },
          {
            "type": "button",
            "style": "primary",
            "height": "sm",
            "color": "#7A42D8",
            "action": {
              "type": "uri",
              "label": "เข้าเกม",
              "uri": "https://masterworldbet.com/sign-up?ref_agent=1feacd0466b9&ref_zean=0977AB59420F"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://raw.githubusercontent.com/masterworldbet/pg-game-menu/main/images/game-012.webp",
        "size": "full",
        "aspectRatio": "3:4",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "9px",
        "backgroundColor": "#07111F",
        "spacing": "xs",
        "contents": [
          {
            "type": "text",
            "text": "MYTHICAL GUARDIANS",
            "weight": "bold",
            "size": "sm",
            "color": "#FFFFFF",
            "wrap": true,
            "maxLines": 2
          },
          {
            "type": "box",
            "layout": "horizontal",
            "margin": "sm",
            "contents": [
              {
                "type": "text",
                "text": "DEMO SCORE",
                "size": "xxs",
                "color": "#91A2BD",
                "flex": 1
              },
              {
                "type": "text",
                "text": "96%",
                "size": "md",
                "weight": "bold",
                "color": "#E9C8FF",
                "align": "end"
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "height": "8px",
            "cornerRadius": "4px",
            "backgroundColor": "#17233A",
            "paddingAll": "1px",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 96,
                "height": "6px",
                "cornerRadius": "3px",
                "backgroundColor": "#B94CFF",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 4,
                "height": "6px",
                "contents": []
              }
            ]
          },
          {
            "type": "text",
            "text": "DEMO UI",
            "size": "xxs",
            "color": "#71819A",
            "align": "end",
            "margin": "xs"
          },
          {
            "type": "button",
            "style": "primary",
            "height": "sm",
            "color": "#7A42D8",
            "action": {
              "type": "uri",
              "label": "เข้าเกม",
              "uri": "https://masterworldbet.com/sign-up?ref_agent=1feacd0466b9&ref_zean=0977AB59420F"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://raw.githubusercontent.com/masterworldbet/pg-game-menu/main/images/game-007.webp",
        "size": "full",
        "aspectRatio": "3:4",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "9px",
        "backgroundColor": "#07111F",
        "spacing": "xs",
        "contents": [
          {
            "type": "text",
            "text": "PERFECT STRIKE",
            "weight": "bold",
            "size": "sm",
            "color": "#FFFFFF",
            "wrap": true,
            "maxLines": 2
          },
          {
            "type": "box",
            "layout": "horizontal",
            "margin": "sm",
            "contents": [
              {
                "type": "text",
                "text": "DEMO SCORE",
                "size": "xxs",
                "color": "#91A2BD",
                "flex": 1
              },
              {
                "type": "text",
                "text": "95%",
                "size": "md",
                "weight": "bold",
                "color": "#E9C8FF",
                "align": "end"
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "height": "8px",
            "cornerRadius": "4px",
            "backgroundColor": "#17233A",
            "paddingAll": "1px",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 95,
                "height": "6px",
                "cornerRadius": "3px",
                "backgroundColor": "#B94CFF",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 5,
                "height": "6px",
                "contents": []
              }
            ]
          },
          {
            "type": "text",
            "text": "DEMO UI",
            "size": "xxs",
            "color": "#71819A",
            "align": "end",
            "margin": "xs"
          },
          {
            "type": "button",
            "style": "primary",
            "height": "sm",
            "color": "#7A42D8",
            "action": {
              "type": "uri",
              "label": "เข้าเกม",
              "uri": "https://masterworldbet.com/sign-up?ref_agent=1feacd0466b9&ref_zean=0977AB59420F"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://raw.githubusercontent.com/masterworldbet/pg-game-menu/main/images/game-002.webp",
        "size": "full",
        "aspectRatio": "3:4",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "9px",
        "backgroundColor": "#07111F",
        "spacing": "xs",
        "contents": [
          {
            "type": "text",
            "text": "ZOMBIE BLASTERS",
            "weight": "bold",
            "size": "sm",
            "color": "#FFFFFF",
            "wrap": true,
            "maxLines": 2
          },
          {
            "type": "box",
            "layout": "horizontal",
            "margin": "sm",
            "contents": [
              {
                "type": "text",
                "text": "DEMO SCORE",
                "size": "xxs",
                "color": "#91A2BD",
                "flex": 1
              },
              {
                "type": "text",
                "text": "90%",
                "size": "md",
                "weight": "bold",
                "color": "#E9C8FF",
                "align": "end"
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "height": "8px",
            "cornerRadius": "4px",
            "backgroundColor": "#17233A",
            "paddingAll": "1px",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 90,
                "height": "6px",
                "cornerRadius": "3px",
                "backgroundColor": "#B94CFF",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 10,
                "height": "6px",
                "contents": []
              }
            ]
          },
          {
            "type": "text",
            "text": "DEMO UI",
            "size": "xxs",
            "color": "#71819A",
            "align": "end",
            "margin": "xs"
          },
          {
            "type": "button",
            "style": "primary",
            "height": "sm",
            "color": "#7A42D8",
            "action": {
              "type": "uri",
              "label": "เข้าเกม",
              "uri": "https://masterworldbet.com/sign-up?ref_agent=1feacd0466b9&ref_zean=0977AB59420F"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://raw.githubusercontent.com/masterworldbet/pg-game-menu/main/images/game-003.webp",
        "size": "full",
        "aspectRatio": "3:4",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "9px",
        "backgroundColor": "#07111F",
        "spacing": "xs",
        "contents": [
          {
            "type": "text",
            "text": "SUPER WILDRIX",
            "weight": "bold",
            "size": "sm",
            "color": "#FFFFFF",
            "wrap": true,
            "maxLines": 2
          },
          {
            "type": "box",
            "layout": "horizontal",
            "margin": "sm",
            "contents": [
              {
                "type": "text",
                "text": "DEMO SCORE",
                "size": "xxs",
                "color": "#91A2BD",
                "flex": 1
              },
              {
                "type": "text",
                "text": "89%",
                "size": "md",
                "weight": "bold",
                "color": "#E9C8FF",
                "align": "end"
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "height": "8px",
            "cornerRadius": "4px",
            "backgroundColor": "#17233A",
            "paddingAll": "1px",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 89,
                "height": "6px",
                "cornerRadius": "3px",
                "backgroundColor": "#B94CFF",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 11,
                "height": "6px",
                "contents": []
              }
            ]
          },
          {
            "type": "text",
            "text": "DEMO UI",
            "size": "xxs",
            "color": "#71819A",
            "align": "end",
            "margin": "xs"
          },
          {
            "type": "button",
            "style": "primary",
            "height": "sm",
            "color": "#7A42D8",
            "action": {
              "type": "uri",
              "label": "เข้าเกม",
              "uri": "https://masterworldbet.com/sign-up?ref_agent=1feacd0466b9&ref_zean=0977AB59420F"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://raw.githubusercontent.com/masterworldbet/pg-game-menu/main/images/game-004.webp",
        "size": "full",
        "aspectRatio": "3:4",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "9px",
        "backgroundColor": "#07111F",
        "spacing": "xs",
        "contents": [
          {
            "type": "text",
            "text": "MIGHTY MANIA",
            "weight": "bold",
            "size": "sm",
            "color": "#FFFFFF",
            "wrap": true,
            "maxLines": 2
          },
          {
            "type": "box",
            "layout": "horizontal",
            "margin": "sm",
            "contents": [
              {
                "type": "text",
                "text": "DEMO SCORE",
                "size": "xxs",
                "color": "#91A2BD",
                "flex": 1
              },
              {
                "type": "text",
                "text": "88%",
                "size": "md",
                "weight": "bold",
                "color": "#E9C8FF",
                "align": "end"
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "height": "8px",
            "cornerRadius": "4px",
            "backgroundColor": "#17233A",
            "paddingAll": "1px",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 88,
                "height": "6px",
                "cornerRadius": "3px",
                "backgroundColor": "#B94CFF",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 12,
                "height": "6px",
                "contents": []
              }
            ]
          },
          {
            "type": "text",
            "text": "DEMO UI",
            "size": "xxs",
            "color": "#71819A",
            "align": "end",
            "margin": "xs"
          },
          {
            "type": "button",
            "style": "primary",
            "height": "sm",
            "color": "#7A42D8",
            "action": {
              "type": "uri",
              "label": "เข้าเกม",
              "uri": "https://masterworldbet.com/sign-up?ref_agent=1feacd0466b9&ref_zean=0977AB59420F"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://raw.githubusercontent.com/masterworldbet/pg-game-menu/main/images/game-011.webp",
        "size": "full",
        "aspectRatio": "3:4",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "9px",
        "backgroundColor": "#07111F",
        "spacing": "xs",
        "contents": [
          {
            "type": "text",
            "text": "FORBIDDEN ALCHEMY",
            "weight": "bold",
            "size": "sm",
            "color": "#FFFFFF",
            "wrap": true,
            "maxLines": 2
          },
          {
            "type": "box",
            "layout": "horizontal",
            "margin": "sm",
            "contents": [
              {
                "type": "text",
                "text": "DEMO SCORE",
                "size": "xxs",
                "color": "#91A2BD",
                "flex": 1
              },
              {
                "type": "text",
                "text": "87%",
                "size": "md",
                "weight": "bold",
                "color": "#E9C8FF",
                "align": "end"
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "height": "8px",
            "cornerRadius": "4px",
            "backgroundColor": "#17233A",
            "paddingAll": "1px",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 87,
                "height": "6px",
                "cornerRadius": "3px",
                "backgroundColor": "#B94CFF",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 13,
                "height": "6px",
                "contents": []
              }
            ]
          },
          {
            "type": "text",
            "text": "DEMO UI",
            "size": "xxs",
            "color": "#71819A",
            "align": "end",
            "margin": "xs"
          },
          {
            "type": "button",
            "style": "primary",
            "height": "sm",
            "color": "#7A42D8",
            "action": {
              "type": "uri",
              "label": "เข้าเกม",
              "uri": "https://masterworldbet.com/sign-up?ref_agent=1feacd0466b9&ref_zean=0977AB59420F"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://raw.githubusercontent.com/masterworldbet/pg-game-menu/main/images/game-010.webp",
        "size": "full",
        "aspectRatio": "3:4",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "9px",
        "backgroundColor": "#07111F",
        "spacing": "xs",
        "contents": [
          {
            "type": "text",
            "text": "FORTUNE HORSE",
            "weight": "bold",
            "size": "sm",
            "color": "#FFFFFF",
            "wrap": true,
            "maxLines": 2
          },
          {
            "type": "box",
            "layout": "horizontal",
            "margin": "sm",
            "contents": [
              {
                "type": "text",
                "text": "DEMO SCORE",
                "size": "xxs",
                "color": "#91A2BD",
                "flex": 1
              },
              {
                "type": "text",
                "text": "86%",
                "size": "md",
                "weight": "bold",
                "color": "#E9C8FF",
                "align": "end"
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "height": "8px",
            "cornerRadius": "4px",
            "backgroundColor": "#17233A",
            "paddingAll": "1px",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 86,
                "height": "6px",
                "cornerRadius": "3px",
                "backgroundColor": "#B94CFF",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 14,
                "height": "6px",
                "contents": []
              }
            ]
          },
          {
            "type": "text",
            "text": "DEMO UI",
            "size": "xxs",
            "color": "#71819A",
            "align": "end",
            "margin": "xs"
          },
          {
            "type": "button",
            "style": "primary",
            "height": "sm",
            "color": "#7A42D8",
            "action": {
              "type": "uri",
              "label": "เข้าเกม",
              "uri": "https://masterworldbet.com/sign-up?ref_agent=1feacd0466b9&ref_zean=0977AB59420F"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://raw.githubusercontent.com/masterworldbet/pg-game-menu/main/images/game-008.webp",
        "size": "full",
        "aspectRatio": "3:4",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "9px",
        "backgroundColor": "#07111F",
        "spacing": "xs",
        "contents": [
          {
            "type": "text",
            "text": "MAYAN DESTINY",
            "weight": "bold",
            "size": "sm",
            "color": "#FFFFFF",
            "wrap": true,
            "maxLines": 2
          },
          {
            "type": "box",
            "layout": "horizontal",
            "margin": "sm",
            "contents": [
              {
                "type": "text",
                "text": "DEMO SCORE",
                "size": "xxs",
                "color": "#91A2BD",
                "flex": 1
              },
              {
                "type": "text",
                "text": "85%",
                "size": "md",
                "weight": "bold",
                "color": "#E9C8FF",
                "align": "end"
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "height": "8px",
            "cornerRadius": "4px",
            "backgroundColor": "#17233A",
            "paddingAll": "1px",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 85,
                "height": "6px",
                "cornerRadius": "3px",
                "backgroundColor": "#B94CFF",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 15,
                "height": "6px",
                "contents": []
              }
            ]
          },
          {
            "type": "text",
            "text": "DEMO UI",
            "size": "xxs",
            "color": "#71819A",
            "align": "end",
            "margin": "xs"
          },
          {
            "type": "button",
            "style": "primary",
            "height": "sm",
            "color": "#7A42D8",
            "action": {
              "type": "uri",
              "label": "เข้าเกม",
              "uri": "https://masterworldbet.com/sign-up?ref_agent=1feacd0466b9&ref_zean=0977AB59420F"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://raw.githubusercontent.com/masterworldbet/pg-game-menu/main/images/game-009.webp",
        "size": "full",
        "aspectRatio": "3:4",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "9px",
        "backgroundColor": "#07111F",
        "spacing": "xs",
        "contents": [
          {
            "type": "text",
            "text": "INFERNO MAYHEM",
            "weight": "bold",
            "size": "sm",
            "color": "#FFFFFF",
            "wrap": true,
            "maxLines": 2
          },
          {
            "type": "box",
            "layout": "horizontal",
            "margin": "sm",
            "contents": [
              {
                "type": "text",
                "text": "DEMO SCORE",
                "size": "xxs",
                "color": "#91A2BD",
                "flex": 1
              },
              {
                "type": "text",
                "text": "83%",
                "size": "md",
                "weight": "bold",
                "color": "#E9C8FF",
                "align": "end"
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "height": "8px",
            "cornerRadius": "4px",
            "backgroundColor": "#17233A",
            "paddingAll": "1px",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 83,
                "height": "6px",
                "cornerRadius": "3px",
                "backgroundColor": "#B94CFF",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 17,
                "height": "6px",
                "contents": []
              }
            ]
          },
          {
            "type": "text",
            "text": "DEMO UI",
            "size": "xxs",
            "color": "#71819A",
            "align": "end",
            "margin": "xs"
          },
          {
            "type": "button",
            "style": "primary",
            "height": "sm",
            "color": "#7A42D8",
            "action": {
              "type": "uri",
              "label": "เข้าเกม",
              "uri": "https://masterworldbet.com/sign-up?ref_agent=1feacd0466b9&ref_zean=0977AB59420F"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "size": "micro",
      "hero": {
        "type": "image",
        "url": "https://raw.githubusercontent.com/masterworldbet/pg-game-menu/main/images/game-005.webp",
        "size": "full",
        "aspectRatio": "3:4",
        "aspectMode": "cover"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "9px",
        "backgroundColor": "#07111F",
        "spacing": "xs",
        "contents": [
          {
            "type": "text",
            "text": "REEL ROYALE SHOWDOWN",
            "weight": "bold",
            "size": "sm",
            "color": "#FFFFFF",
            "wrap": true,
            "maxLines": 2
          },
          {
            "type": "box",
            "layout": "horizontal",
            "margin": "sm",
            "contents": [
              {
                "type": "text",
                "text": "DEMO SCORE",
                "size": "xxs",
                "color": "#91A2BD",
                "flex": 1,
                "contents": []
              },
              {
                "type": "text",
                "text": "82%",
                "size": "md",
                "weight": "bold",
                "color": "#E9C8FF",
                "align": "end"
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "height": "8px",
            "cornerRadius": "4px",
            "backgroundColor": "#17233A",
            "paddingAll": "1px",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "flex": 82,
                "height": "6px",
                "cornerRadius": "3px",
                "backgroundColor": "#B94CFF",
                "contents": []
              },
              {
                "type": "box",
                "layout": "vertical",
                "flex": 18,
                "height": "6px",
                "contents": []
              }
            ]
          },
          {
            "type": "text",
            "text": "DEMO UI",
            "size": "xxs",
            "color": "#71819A",
            "align": "end",
            "margin": "xs"
          },
          {
            "type": "button",
            "style": "primary",
            "height": "sm",
            "color": "#7A42D8",
            "action": {
              "type": "uri",
              "label": "เข้าเกม",
              "uri": "https://masterworldbet.com/sign-up?ref_agent=1feacd0466b9&ref_zean=0977AB59420F"
            }
          }
        ]
      }
    }
  ]
};

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

async function replyToLine(replyToken) {
  const response = await fetch(LINE_REPLY_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      replyToken,
      messages: [
        {
          type: "flex",
          altText: "MASTER WORLD GAME MENU",
          contents: FLEX_CAROUSEL,
        },
      ],
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
      await replyToLine(event.replyToken);
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
