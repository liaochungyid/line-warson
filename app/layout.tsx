import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "@/styles/global.css";

const noto_sans_tc = Noto_Sans_TC({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-tc",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    template: "%s | Lyle Stack Life",
    default: "Home",
  },
  description: "Lyle Stack Life ",
  generator: "Next.js",
  applicationName: "Lyle Stack Life",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Lyle Stack Life",
    "Lyle",
    "Stack",
    "Life",
    "React",
    "fullstack",
    "javascript",
    "nextjs",
  ],
  colorScheme: "light",
  creator: "Lyle Liao",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className={noto_sans_tc.className}>
      <body className="relative text-gray-900">
        <div
          className="flex h-screen w-full items-center justify-center overflow-auto bg-gradient-to-br from-lime-300 via-teal-300 to-sky-300 bg-cover p-global-container"
          style={{ height: "100svh" }}
        >
          <main className="h-full w-full max-w-xl rounded-xl bg-white bg-opacity-50 px-5 py-8 backdrop-blur backdrop-filter">
            <div className="flex items-center gap-4 flex-col font-bold">
              <h2 className="text-2xl">邱盛華 | Ｗarson</h2>
              <h2 className="text-lg">電子名片分享</h2>
            </div>

            <div className="mt-5 flex flex-col gap-y-3 divide-y">
              {children}
            </div>
          </main>
        </div>

        <div className="fixed bottom-0 right-0 z-10 mb-4 mr-4 flex items-end justify-end">
          <a
            href="https://www.buymeacoffee.com/liaochungyid"
            target="_blank"
            className="overflow-hidden rounded-lg transition-all duration-300 hover:brightness-125"
          >
            <img
              src="/buy-me-a-bear.png"
              alt="Buy Me A Bear"
              className="h-[48px] w-[176px]"
            />
          </a>
        </div>
      </body>
    </html>
  );
}
