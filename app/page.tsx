'use client';

import { Liff } from '@line/liff/exports';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [liffObject, setLiffObject] = useState<Liff | null>(null);
  const [liffError, setLiffError] = useState<string | null>(null);

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    // to avoid `window is not defined` error
    import('@line/liff').then(({ liff }) => {
      liff
        .init({ liffId: '1661426908-NZeBdZGD' })
        .then(() => {
          console.log('liff.init() done');
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
      liffObject.login({
        redirectUri: 'https://liaochungyid.github.io/line-warson/',
      });
    }
    if (!liffObject.isInClient()) {
      console.log(liffObject.getDecodedIDToken());
      console.log(liffObject.getProfile());
    }
    liffObject.shareTargetPicker(
      [
        {
          type: 'flex',
          altText: '邱盛華的名片',
          contents: {
            type: 'carousel',
            contents: [
              {
                type: 'bubble',
                body: {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'image',
                      url: 'https://liaochungyid.github.io/line-warson/window%202.png',
                      gravity: 'top',
                      aspectRatio: '1:2',
                      aspectMode: 'cover',
                      size: 'full',
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'button',
                          action: {
                            type: 'uri',
                            label: '打電話給盛華',
                            uri: 'tel:+886927715751',
                          },
                          style: 'primary',
                          color: '#312E81E6',
                          height: 'sm',
                        },
                      ],
                      position: 'absolute',
                      offsetBottom: '16px',
                      offsetStart: '0px',
                      offsetEnd: '0px',
                      paddingStart: '16px',
                      paddingEnd: '16px',
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'button',
                          action: {
                            type: 'uri',
                            label: '分享給好友',
                            uri: 'https://liaochungyid.github.io/line-warson/',
                          },
                          style: 'primary',
                          color: '#312E81E6',
                          height: 'sm',
                        },
                      ],
                      position: 'absolute',
                      offsetBottom: '64px',
                      offsetStart: '0px',
                      offsetEnd: '0px',
                      spacing: '8px',
                      paddingStart: '16px',
                      paddingEnd: '16px',
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'button',
                          action: {
                            type: 'uri',
                            label: 'LINE',
                            uri: 'https://line.me/ti/p/719mwLMrx_',
                          },
                          style: 'primary',
                          color: '#312E81E6',
                          height: 'sm',
                        },
                      ],
                      position: 'absolute',
                      offsetBottom: '112px',
                      offsetStart: '0px',
                      offsetEnd: '0px',
                      spacing: '8px',
                      paddingStart: '16px',
                      paddingEnd: '16px',
                    },
                  ],
                  paddingAll: '0px',
                },
                styles: {
                  body: {
                    backgroundColor: '#E6E7EE',
                  },
                },
              },
              {
                type: 'bubble',
                body: {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'image',
                      url: 'https://liaochungyid.github.io/line-warson/window%203.png',
                      gravity: 'top',
                      aspectRatio: '1:2',
                      aspectMode: 'cover',
                      size: 'full',
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'button',
                          action: {
                            type: 'uri',
                            label: '服務經歷',
                            uri: 'https://liaochungyid.github.io/line-warson/',
                          },
                          style: 'primary',
                          color: '#312E81E6',
                          height: 'sm',
                        },
                      ],
                      position: 'absolute',
                      offsetBottom: '16px',
                      offsetStart: '0px',
                      offsetEnd: '0px',
                      paddingStart: '16px',
                      paddingEnd: '16px',
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'button',
                          action: {
                            type: 'uri',
                            label: '案例分享',
                            uri: 'https://liaochungyid.github.io/line-warson/',
                          },
                          style: 'primary',
                          color: '#312E81E6',
                          height: 'sm',
                        },
                      ],
                      position: 'absolute',
                      offsetBottom: '64px',
                      offsetStart: '0px',
                      offsetEnd: '0px',
                      spacing: '8px',
                      paddingStart: '16px',
                      paddingEnd: '16px',
                    },
                  ],
                  paddingAll: '0px',
                },
                styles: {
                  body: {
                    backgroundColor: '#E6E7EE',
                  },
                },
              },
              {
                type: 'bubble',
                body: {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'image',
                      url: 'https://liaochungyid.github.io/line-warson/window%204.png',
                      gravity: 'top',
                      aspectRatio: '1:2',
                      aspectMode: 'cover',
                      size: 'full',
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'button',
                          action: {
                            type: 'uri',
                            label: '案例分享',
                            uri: 'https://liaochungyid.github.io/line-warson/',
                          },
                          style: 'primary',
                          color: '#312E81E6',
                          height: 'sm',
                        },
                      ],
                      position: 'absolute',
                      offsetBottom: '16px',
                      offsetStart: '0px',
                      offsetEnd: '0px',
                      paddingStart: '16px',
                      paddingEnd: '16px',
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'button',
                          action: {
                            type: 'uri',
                            label: '知名客戶',
                            uri: 'https://liaochungyid.github.io/line-warson/',
                          },
                          style: 'primary',
                          color: '#312E81E6',
                          height: 'sm',
                        },
                      ],
                      position: 'absolute',
                      offsetBottom: '64px',
                      offsetStart: '0px',
                      offsetEnd: '0px',
                      spacing: '8px',
                      paddingStart: '16px',
                      paddingEnd: '16px',
                    },
                  ],
                  paddingAll: '0px',
                },
                styles: {
                  body: {
                    backgroundColor: '#E6E7EE',
                  },
                },
              },
              {
                type: 'bubble',
                body: {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'image',
                      url: 'https://liaochungyid.github.io/line-warson/window%205.png',
                      gravity: 'top',
                      aspectRatio: '1:2',
                      aspectMode: 'cover',
                      size: 'full',
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'button',
                          action: {
                            type: 'uri',
                            label: '更多財商知識',
                            uri: 'https://liaochungyid.github.io/line-warson/',
                          },
                          style: 'primary',
                          color: '#312E81E6',
                          height: 'sm',
                        },
                      ],
                      position: 'absolute',
                      offsetBottom: '16px',
                      offsetStart: '0px',
                      offsetEnd: '0px',
                      paddingStart: '16px',
                      paddingEnd: '16px',
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'button',
                          action: {
                            type: 'uri',
                            label: '投資評估SOP',
                            uri: 'https://liaochungyid.github.io/line-warson/',
                          },
                          style: 'primary',
                          color: '#312E81E6',
                          height: 'sm',
                        },
                      ],
                      position: 'absolute',
                      offsetBottom: '64px',
                      offsetStart: '0px',
                      offsetEnd: '0px',
                      spacing: '8px',
                      paddingStart: '16px',
                      paddingEnd: '16px',
                    },
                  ],
                  paddingAll: '0px',
                },
                styles: {
                  body: {
                    backgroundColor: '#E6E7EE',
                  },
                },
              },
              {
                type: 'bubble',
                body: {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'image',
                      url: 'https://liaochungyid.github.io/line-warson/window%206.png',
                      gravity: 'top',
                      aspectRatio: '1:2',
                      aspectMode: 'cover',
                      size: 'full',
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'button',
                          action: {
                            type: 'uri',
                            label: '合作保險經紀',
                            uri: 'https://liaochungyid.github.io/line-warson/',
                          },
                          style: 'primary',
                          color: '#312E81E6',
                          height: 'sm',
                        },
                      ],
                      position: 'absolute',
                      offsetBottom: '16px',
                      offsetStart: '0px',
                      offsetEnd: '0px',
                      paddingStart: '16px',
                      paddingEnd: '16px',
                    },
                    {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'button',
                          action: {
                            type: 'uri',
                            label: '保險購買SOP',
                            uri: 'https://liaochungyid.github.io/line-warson/',
                          },
                          style: 'primary',
                          color: '#312E81E6',
                          height: 'sm',
                        },
                      ],
                      position: 'absolute',
                      offsetBottom: '64px',
                      offsetStart: '0px',
                      offsetEnd: '0px',
                      spacing: '8px',
                      paddingStart: '16px',
                      paddingEnd: '16px',
                    },
                  ],
                  paddingAll: '0px',
                },
                styles: {
                  body: {
                    backgroundColor: '#E6E7EE',
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
    <div className='card-content-profil flex items-center pt-3'>
      <button
        type='button'
        className='grow items-center rounded bg-indigo-500 px-5 py-3 text-xs text-white transition-all duration-300 hover:bg-indigo-700'
        onClick={handleSend}
      >
        選擇 Line 分享對象
      </button>
    </div>
  );
}
