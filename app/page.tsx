"use client";

import { Liff } from "@line/liff/exports";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [liffObject, setLiffObject] = useState<Liff | null>(null);
  const [liffError, setLiffError] = useState<string | null>(null);

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    // to avoid `window is not defined` error
    import("@line/liff").then(({ liff }) => {
      liff
        .init({ liffId: "1661348398-21Woqg0R" })
        .then(() => {
          console.log("liff.init() done");
          setLiffObject(liff);
        })
        .catch((error) => {
          console.log(`liff.init() failed: ${error}`);
          setLiffError(error.toString());
        });
    });
  }, []);

  function handleSend() {
    if (!liffObject) return;
    if (!liffObject.isLoggedIn() && !liffObject.isInClient()) {
      liffObject.login({ redirectUri: "https://lsl-line.vercel.app/" });
    }
    if (!liffObject.isInClient()) {
      console.log(liffObject.getDecodedIDToken());
      console.log(liffObject.getProfile());
    }
    liffObject.shareTargetPicker(
      [
        {
          type: "flex",
          altText: "Lyle's 名片",
          contents: {
            type: "carousel",
            contents: [
              {
                type: "bubble",
                hero: {
                  type: "image",
                  size: "full",
                  aspectRatio: "20:18",
                  aspectMode: "cover",
                  url: "https://lsl-line.vercel.app/illustration.jpg",
                },
                body: {
                  type: "box",
                  layout: "vertical",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "Lyle | 廖仲逸",
                      wrap: true,
                      weight: "bold",
                      size: "xl",
                    },
                    {
                      type: "box",
                      layout: "vertical",
                      contents: [
                        {
                          type: "text",
                          text: "Fullstack Developer",
                          wrap: true,
                          weight: "bold",
                          size: "md",
                          flex: 0,
                          color: "#999999",
                        },
                        {
                          type: "text",
                          text: "網頁(全端)工程師",
                          wrap: true,
                          weight: "bold",
                          size: "md",
                          flex: 0,
                          color: "#999999",
                        },
                        {
                          type: "text",
                          text: "React / Next.js / TailwindCSS",
                          wrap: true,
                          weight: "bold",
                          size: "md",
                          flex: 0,
                          color: "#999999",
                        },
                      ],
                    },
                    {
                      type: "box",
                      layout: "baseline",
                      contents: [
                        {
                          type: "icon",
                          url: "https://lsl-line.vercel.app/icon-code.png",
                          size: "xxs",
                        },
                        {
                          type: "text",
                          text: "SPA單頁應用",
                          size: "md",
                          color: "#001064",
                          wrap: true,
                          offsetStart: "2px",
                          weight: "bold",
                        },
                        {
                          type: "icon",
                          url: "https://lsl-line.vercel.app/icon-code.png",
                          size: "xxs",
                        },
                        {
                          type: "text",
                          text: "Blog互動網誌",
                          size: "md",
                          color: "#001064",
                          wrap: true,
                          offsetStart: "2px",
                          weight: "bold",
                        },
                      ],
                      offsetTop: "5px",
                    },
                    {
                      type: "box",
                      layout: "baseline",
                      contents: [
                        {
                          type: "icon",
                          url: "https://lsl-line.vercel.app/icon-code.png",
                          size: "xxs",
                        },
                        {
                          type: "text",
                          text: "SEO推薦優化",
                          size: "md",
                          color: "#001064",
                          wrap: true,
                          offsetStart: "2px",
                          weight: "bold",
                        },
                        {
                          type: "icon",
                          url: "https://lsl-line.vercel.app/icon-code.png",
                          size: "xxs",
                        },
                        {
                          type: "text",
                          text: "Line卡片名片",
                          size: "md",
                          color: "#001064",
                          wrap: true,
                          offsetStart: "2px",
                          weight: "bold",
                        },
                      ],
                      offsetTop: "5px",
                    },
                  ],
                },
                footer: {
                  type: "box",
                  layout: "vertical",
                  spacing: "sm",
                  contents: [
                    {
                      type: "button",
                      style: "secondary",
                      action: {
                        type: "uri",
                        label: "Lyle's Line",
                        uri: "https://line.me/ti/p/2gGV1sQ9HV",
                      },
                      color: "#c7d2fe",
                      height: "sm",
                    },
                    {
                      type: "button",
                      action: {
                        type: "uri",
                        label: "分享給好友",
                        uri: "https://liff.line.me/1661348398-21Woqg0R",
                      },
                      style: "secondary",
                      color: "#c7d2fe",
                      height: "sm",
                    },
                    {
                      type: "button",
                      action: {
                        type: "uri",
                        label: "打給 Lyle",
                        uri: "tel:0980244428",
                      },
                      height: "sm",
                      style: "secondary",
                      color: "#c7d2fe",
                    },
                  ],
                },
              },
              {
                type: "bubble",
                hero: {
                  type: "image",
                  size: "full",
                  aspectRatio: "20:18",
                  aspectMode: "cover",
                  url: "https://lsl-line.vercel.app/the-blog.png",
                },
                body: {
                  type: "box",
                  layout: "vertical",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "Line 名片範例",
                      wrap: true,
                      weight: "bold",
                      size: "xl",
                    },
                    {
                      type: "text",
                      text: "網站 架站範例",
                      wrap: true,
                      weight: "bold",
                      size: "xl",
                    },
                    {
                      type: "text",
                      text: "個人 頁面連結",
                      wrap: true,
                      weight: "bold",
                      size: "xl",
                    },
                    {
                      type: "separator",
                    },
                    {
                      type: "text",
                      text: "任意Line名片格式，多選擇與可客製",
                      wrap: true,
                      size: "md",
                      offsetTop: "5px",
                      color: "#231815",
                    },
                    {
                      type: "text",
                      text: "請聯繫老邱 Warson",
                      offsetTop: "5px",
                    },
                  ],
                },
                footer: {
                  type: "box",
                  layout: "vertical",
                  spacing: "sm",
                  contents: [
                    {
                      type: "button",
                      style: "secondary",
                      action: {
                        type: "uri",
                        label: "個人網站",
                        uri: "https://liaochungyid.github.io/about-me/",
                      },
                      color: "#c7d2fe",
                      height: "sm",
                    },
                    {
                      type: "button",
                      style: "secondary",
                      action: {
                        type: "uri",
                        label: "接案實例",
                        uri: "https://gama-green.tw/",
                      },
                      color: "#c7d2fe",
                      height: "sm",
                    },
                    {
                      type: "button",
                      style: "secondary",
                      action: {
                        type: "uri",
                        label: "工作紀錄",
                        uri: "https://iwills.sg/",
                      },
                      color: "#c7d2fe",
                      height: "sm",
                    },
                  ],
                },
              },
              {
                type: "bubble",
                hero: {
                  type: "image",
                  size: "full",
                  aspectRatio: "20:18",
                  aspectMode: "cover",
                  url: "https://lsl-line.vercel.app/neumorphis.png",
                },
                body: {
                  type: "box",
                  layout: "vertical",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "更多名片樣式",
                      wrap: true,
                      weight: "bold",
                      size: "xl",
                    },
                    {
                      type: "box",
                      layout: "baseline",
                      contents: [
                        {
                          type: "text",
                          wrap: true,
                          weight: "bold",
                          size: "md",
                          flex: 0,
                          color: "#001064",
                          text: "副標題 | 宣傳標語",
                        },
                      ],
                    },
                    {
                      type: "separator",
                    },
                    {
                      type: "text",
                      text: "將你的想法轉化為無縫的線上體驗，為您打造卓越的網絡世界",
                      wrap: true,
                      size: "md",
                      offsetTop: "5px",
                      color: "#231815",
                    },
                    {
                      type: "box",
                      layout: "baseline",
                      contents: [
                        {
                          type: "text",
                          text: "Unleashing Innovation,",
                          size: "sm",
                          weight: "bold",
                        },
                      ],
                      offsetTop: "5px",
                    },
                    {
                      type: "box",
                      layout: "baseline",
                      contents: [
                        {
                          type: "text",
                          text: "Transforming Possibilities.",
                          size: "sm",
                          weight: "bold",
                        },
                      ],
                      offsetTop: "5px",
                    },
                  ],
                },
                footer: {
                  type: "box",
                  layout: "vertical",
                  spacing: "sm",
                  contents: [
                    {
                      type: "button",
                      style: "secondary",
                      action: {
                        type: "uri",
                        label: "可連結地圖",
                        uri: "https://goo.gl/maps/ZdnAr9MzyNRJEa4s5",
                      },
                      color: "#a7f3d0",
                      height: "sm",
                    },
                    {
                      type: "button",
                      style: "secondary",
                      action: {
                        type: "uri",
                        label: "可連結電話",
                        uri: "tel:0980244428",
                      },
                      color: "#a7f3d0",
                      height: "sm",
                    },
                    {
                      type: "button",
                      style: "secondary",
                      action: {
                        type: "uri",
                        label: "可連結商店",
                        uri: "https://www.theoryofscent.com/",
                      },
                      color: "#a7f3d0",
                      height: "sm",
                    },
                  ],
                },
              },
              {
                type: "bubble",
                body: {
                  type: "box",
                  layout: "vertical",
                  spacing: "sm",
                  contents: [
                    {
                      type: "image",
                      url: "https://lsl-line.vercel.app/do-more-code-purple.png",
                      gravity: "top",
                      aspectRatio: "5:8",
                      aspectMode: "cover",
                      size: "full",
                      offsetTop: "0px",
                      offsetStart: "0px",
                      offsetEnd: "0px",
                      offsetBottom: "0px",
                    },
                    {
                      type: "box",
                      layout: "vertical",
                      contents: [
                        {
                          type: "text",
                          text: "全畫面的樣式",
                          color: "#ffffff",
                          size: "lg",
                          weight: "bold",
                          align: "center",
                          offsetTop: "-10px",
                        },
                        {
                          type: "text",
                          text: "規劃 / 設計 / 驗收",
                          size: "md",
                          color: "#ffffff",
                          align: "center",
                          offsetBottom: "5px",
                        },
                        {
                          type: "button",
                          action: {
                            type: "uri",
                            label: "名片頁面",
                            uri: "https://lsl-line.vercel.app/",
                          },
                          style: "secondary",
                          height: "sm",
                          offsetTop: "10px",
                          color: "#a7f3d0",
                        },
                      ],
                      position: "absolute",
                      offsetBottom: "0px",
                      offsetStart: "0px",
                      offsetEnd: "0px",
                      paddingAll: "20px",
                      paddingTop: "25px",
                    },
                  ],
                  paddingAll: "none",
                  paddingTop: "none",
                  paddingBottom: "none",
                  paddingStart: "none",
                  paddingEnd: "none",
                },
                styles: {
                  body: {
                    backgroundColor: "#000000",
                  },
                },
              },
            ],
          },
        },
      ],
      { isMultiple: true }
    );
  }

  return (
    <div className="card-content-profil flex items-center justify-between pt-3">
      <div className=" flex items-center gap-x-2">
        <img
          className="avatar h-10 w-10 rounded-full border-4 border-opacity-40"
          src="https://ui.glass/generator/static/profile-picture-3-b701fcb37cb1fef6a7e720dccd16e4c0.jpg"
          alt=""
        />
        <div className="card-name-user text-xs">
          <h3 className="font-semibold">Lyle | 廖仲逸</h3>
        </div>
      </div>

      <button
        type="button"
        className="flex items-center rounded bg-indigo-500 px-5 py-3 text-xs text-white transition-all duration-300 hover:bg-indigo-700"
        onClick={handleSend}
      >
        <span className="">發送</span>
      </button>
    </div>
  );
}
