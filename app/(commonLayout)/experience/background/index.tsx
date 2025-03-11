"use client";
import React, { Children } from "react";
import * as motion from "motion/react-client";
import ThreeLines from "@/components/base/ThreeLines";

const circle = {
  width: 300,
  height: 300,
  backgroundColor: "#384E41",
  borderRadius: 300,
};

const box1 = {
  width: 720,
  height: 100,
  backgroundColor: "#384E41",
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
};
const box2 = {
  width: 900,
  height: 30,
  backgroundColor: "#384E41",
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
};
const box3 = {
  width: 1080,
  height: 30,
  backgroundColor: "#384E41",
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
};
const box4 = {
  width: 500,
  height: 700,
  backgroundColor: "#FEFCF0",
};
const box5 = {
  width: 500,
  height: 900,
};
const Background = ({ children, ...props }: { children: any }) => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full">
          <motion.div
            initial={{ y: "-100vh", height: 0 }}
            animate={{ height: "100vh", y: "0" }}
            transition={{ duration: 1, origin: 1 }}
          >
            <ThreeLines
              orientation={"vertical"}
              width={4}
              color={"#AD8665"}
              gap={32}
            />
          </motion.div>
        </div>
        <div className="relative w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default Background;
