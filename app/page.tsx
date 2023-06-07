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
                  aspectRatio: "20:13",
                  aspectMode: "cover",
                  url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png",
                },
                body: {
                  type: "box",
                  layout: "vertical",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "Arm Chair, White",
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
                          text: "$49",
                          wrap: true,
                          weight: "bold",
                          size: "xl",
                          flex: 0,
                        },
                        {
                          type: "text",
                          text: ".99",
                          wrap: true,
                          weight: "bold",
                          size: "sm",
                          flex: 0,
                        },
                      ],
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
                      style: "primary",
                      action: {
                        type: "uri",
                        label: "Add to Cart",
                        uri: "https://linecorp.com",
                      },
                    },
                    {
                      type: "button",
                      action: {
                        type: "uri",
                        label: "Add to wishlist",
                        uri: "https://linecorp.com",
                      },
                    },
                  ],
                },
              },
              {
                type: "bubble",
                hero: {
                  type: "image",
                  size: "full",
                  aspectRatio: "20:13",
                  aspectMode: "cover",
                  url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png",
                },
                body: {
                  type: "box",
                  layout: "vertical",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "Metal Desk Lamp",
                      wrap: true,
                      weight: "bold",
                      size: "xl",
                    },
                    {
                      type: "box",
                      layout: "baseline",
                      flex: 1,
                      contents: [
                        {
                          type: "text",
                          text: "$11",
                          wrap: true,
                          weight: "bold",
                          size: "xl",
                          flex: 0,
                        },
                        {
                          type: "text",
                          text: ".99",
                          wrap: true,
                          weight: "bold",
                          size: "sm",
                          flex: 0,
                        },
                      ],
                    },
                    {
                      type: "text",
                      text: "Temporarily out of stock",
                      wrap: true,
                      size: "xxs",
                      margin: "md",
                      color: "#ff5551",
                      flex: 0,
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
                      flex: 2,
                      style: "primary",
                      color: "#aaaaaa",
                      action: {
                        type: "uri",
                        label: "Add to Cart",
                        uri: "https://linecorp.com",
                      },
                    },
                    {
                      type: "button",
                      action: {
                        type: "uri",
                        label: "Add to wish list",
                        uri: "https://linecorp.com",
                      },
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
                      type: "button",
                      flex: 1,
                      gravity: "center",
                      action: {
                        type: "uri",
                        label: "See more",
                        uri: "https://linecorp.com",
                      },
                    },
                  ],
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
          <h3 className="font-semibold">Jeny Green</h3>
        </div>
      </div>

      <button
        type="button"
        className="flex items-center rounded bg-indigo-500 px-5 py-3 text-xs text-white transition-all duration-300 hover:bg-indigo-700"
        onClick={handleSend}
      >
        <span className="">Send</span>
      </button>
    </div>
  );
}
