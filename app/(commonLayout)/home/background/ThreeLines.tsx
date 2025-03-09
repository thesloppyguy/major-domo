"use client";
import React from "react";

const ThreeLines = ({
  orientation,
  width,
  color,
  gap,
  ...props
}: {
  orientation: string;
  width: number;
  color: string;
  gap: number;
}) => {
  return (
    <div
      className={`flex ${
        orientation === "vertical" ? "flex-row mr-[5%]" : "flex-col mt-[5%]"
      } gap-[32px] justify-end `}
      {...props}
    >
      <div
        className={`${
          orientation === "vertical" ? `h-[100vh] w-1` : `w-[100vw] h-1`
        } border-4 border-[#AD8665]`}
      />
      <div
        className={`${
          orientation === "vertical" ? `h-[100vh] w-1` : `w-[100vw] h-1`
        } border-4 border-[#AD8665]`}
      />
      <div
        className={`${
          orientation === "vertical" ? `h-[100vh] w-1` : `w-[100vw] h-1`
        } border-4 border-[#AD8665]`}
      />
    </div>
  );
  return;
};

export default ThreeLines;
