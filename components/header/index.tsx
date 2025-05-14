"use client";
import React from "react";
import Navbar from "./navbar";
import SlideUp from "../base/slideUp";
import { useRouter } from "next/navigation";
const HeaderSection = ({
  handleToggle,
  isHome = true,
}: {
  handleToggle: () => void;
  isHome?: boolean;
}) => {
  const router = useRouter();
  return (
    <header className="w-full z-50 fixed top-0 bg-gradient-to-b from-black/30 to-transparent font-sans">
      <div className="flex justify-between p-4 text-center items-center">
        <div className="text-white cursor-pointer">
          {!isHome ? (
            <div
              className="text-md font-bold text-white text-left"
              onClick={() => {
                router.push("/");
              }}
            >
              BACK
            </div>
          ) : (
            <>
              <div
                className="text-md font-bold text-white text-left"
                onClick={() => {
                  router.push("/");
                }}
              >
                SAHIL
              </div>
              <div
                className="text-md font-bold text-gray-400 text-left"
                onClick={() => {
                  router.push("/");
                }}
              >
                Available
              </div>
            </>
          )}
        </div>
        <div className="text-white flex items-center gap-2">
          <div className="text-md font-bold hidden md:flex gap-1">
            <SlideUp>
              <div className="text-lg text-gray-400">
                {new Date().toLocaleString("en-US", {
                  timeZone: "Asia/Kolkata",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </div>
            </SlideUp>
            <SlideUp>
              <div className="flex gap-1">
                <div className="text-lg text-gray-400">BLR</div>
                <div className="text-lg text-gray-400">IND</div>
              </div>
            </SlideUp>
          </div>
          <div
            className="text-md font-bold block md:hidden hover:cursor-pointer"
            onClick={handleToggle}
          >
            <SlideUp>
              <div>MENU</div>
            </SlideUp>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
