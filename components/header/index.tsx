"use client";
import React from "react";
import Navbar from "./navbar";
import SlideUp from "../base/slideUp";
const HeaderSection = ({ handleToggle }: { handleToggle: () => void }) => {
  return (
    <div className="flex justify-between p-4 text-center items-center">
      <div className="text-white">
        <div className="text-xl font-bold text-primary text-left">SAHIL</div>
        <div className="text-lg font-bold text-secondary text-left">
          Available
        </div>
      </div>
      <div className="text-white flex items-center gap-2">
        <div
          onClick={handleToggle}
          className="text-lg font-bold hover:cursor-pointer text-primary"
        >
          <SlideUp>[AI]</SlideUp>
        </div>
        <div className="text-lg font-bold hidden md:flex gap-1">
          <SlideUp>
            <div className="text-lg text-secondary">
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
              <div className="text-lg text-secondary">BLR</div>
              <div className="text-lg text-secondary">IND</div>
            </div>
          </SlideUp>
        </div>
        <div className="text-lg font-bold block md:hidden hover:cursor-pointer">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
