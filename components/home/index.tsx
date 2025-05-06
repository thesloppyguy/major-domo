import React from "react";
import SlideUp from "../base/slideUp";
const HomeSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-white text-4xl font-bold bg-red-500 py-4 px-8 rounded-full">
        <SlideUp>
          <h1>Hello</h1>
        </SlideUp>
      </div>
    </div>
  );
};

export default HomeSection;
