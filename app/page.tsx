"use client";

import liff from "@line/liff";
import { Liff } from "@line/liff/exports";
import { useEffect, useState } from "react";

export default function Home() {
  const [liffObject, setLiffObject] = useState<Liff | null>(null);

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    // to avoid `window is not defined` error
    liff
      .init({ liffId: "1661348398" })
      .then(() => {
        console.log("liff.init() done");
        setLiffObject(liff);
      })
      .catch((error) => {
        console.log(`liff.init() failed: ${error}`);
      });
  }, []);

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

      <div className="card-action">
        <button className="flex items-center bg-indigo-500 px-5 py-3 text-xs text-white hover:bg-indigo-700">
          <span className="">Send</span>
        </button>
      </div>
    </div>
  );
}
