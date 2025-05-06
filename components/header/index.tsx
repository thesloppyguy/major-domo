"use client";
import React from "react";
import Navbar from "./navbar";
const HeaderSection = ({ handleToggle }: { handleToggle: () => void }) => {
  return (
    <div className="flex justify-between px-4 text-center items-center">
      <div className="text-white">
        <div className="text-xl font-bold text-left">John Doe</div>
        <div className="text-lg font-bold text-left">Available</div>
      </div>
      <div className="text-white flex items-center gap-2">
        <div
          onClick={handleToggle}
          className="text-lg font-bold hover:cursor-pointer"
        >
          [AI]
        </div>
        <div className="text-lg font-bold hidden md:flex gap-1">
          <div className="text-lg">
            {new Date().toLocaleString("en-US", {
              timeZone: "Asia/Kolkata",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </div>
          <div className="text-lg">BLR</div>
          <div className="text-lg">IND</div>
        </div>
        <div className="text-lg font-bold block md:hidden hover:cursor-pointer">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
