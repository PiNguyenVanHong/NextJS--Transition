"use client";

import { useEffect } from "react";
// import { animatePageIn } from "@/utils/animations";
import { animatePageIn } from "@/utils/v2/animations";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <>
      {/* <div>
      <div
        id="banner-1"
        className="w-1/4 min-h-screen bg-neutral-950 z-10 fixed top-0 left-0"
      />
      <div
        id="banner-2"
        className="w-1/4 min-h-screen bg-neutral-950 z-10 fixed top-0 left-1/4"
      />
      <div
        id="banner-3"
        className="w-1/4 min-h-screen bg-neutral-950 z-10 fixed top-0 left-2/4"
      />
      <div
        id="banner-4"
        className="w-1/4 min-h-screen bg-neutral-950 z-10 fixed top-0 left-3/4"
      />
      {children}
    </div> */}
      {/* <div className="fixed top-0 left-0 w-screen h-screen flex flex-col z-20 pointer-events-none">
        <div className="w-full h-full flex-1 grid grid-cols-5">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              id="block"
              className="block origin-top bg-[#746df8] scale-y-100 will-change-transform"
            ></div>
          ))}
        </div>
        <div className="w-full h-full flex-1 grid grid-cols-5">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              id="block"
              className="block origin-bottom bg-[#746df8] scale-y-100 will-change-transform"
            ></div>
          ))}
        </div>
      </div> */}
      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col z-20 pointer-events-none">
      <div className="transition-row row-1">
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
        </div>
        <div className="transition-row row-2">
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
        </div>
    </div>
      {children}
    </>
  );
}
