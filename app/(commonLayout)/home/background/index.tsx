"use client";
import React, { Children } from "react";
import * as motion from "motion/react-client";
import ThreeLines from "./ThreeLines";

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
        <div className="absolute right-0 top-[50%] hidden sm:block">
          <motion.div
            style={box1}
            initial={{ width: "0px", x: "720px" }}
            animate={{ width: "720px", x: 0 }}
            transition={{ duration: 1, origin: 1 }}
          />
        </div>
        <div className="absolute right-0 top-[70%]">
          <motion.div
            style={box2}
            initial={{ width: "0px", x: "900px" }}
            animate={{ width: "900px", x: 0 }}
            transition={{ duration: 2, origin: 1 }}
          />
        </div>
        <div className="absolute right-0 top-[80%]">
          <motion.div
            style={box3}
            initial={{ width: "0px", x: "1080px" }}
            animate={{ width: "1080px", x: 0 }}
            transition={{ duration: 3, origin: 1 }}
          />
        </div>
        <div className="absolute hidden sm:block left-[15%] bottom-0">
          <motion.div
            style={box4}
            initial={{ height: "0px", y: "700px" }}
            animate={{ height: "700px", y: 0 }}
            transition={{ duration: 1, origin: 1 }}
            className="border-l-[14px] border-r-[14px] border-t-[14px] border-[#7E7175] rounded-t-[15px]"
          >
            <div className="flex flex-col w-full h-full p-4 gap-4">
              <div className="mt-auto rounded-[14px] bg-[#d3bca36f] h-[20%]"></div>
              <div className="rounded-[14px] bg-[#d2a677] opacity-50 w-full h-[40%]"></div>
            </div>
          </motion.div>
        </div>
        <div className="absolute hidden sm:block left-[15%] bottom-0">
          <motion.div
            style={box5}
            initial={{ height: "0px", y: "450px" }}
            animate={{ height: "450px", y: 0 }}
            transition={{ duration: 2, origin: 1 }}
            className="p-10"
          >
            <div className="flex flex-col w-full h-full p-4 gap-4 justify-center items-center">
              <img
                src="/avatars/HeadShot.png"
                className="rounded-[14px] w-[80%]"
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute left-[10%] top-[2%]">
          <motion.div
            initial={{ y: -600, width: 0 }}
            animate={{ width: 300, y: "2%" }}
            transition={{ duration: 1, origin: 1 }}
          >
            <motion.div
              style={circle}
              initial={{ y: 0 }}
              animate={{ borderRadius: [300, 10] }}
              transition={{
                duration: 4,
                delay: 10,
              }}
            >
              <div className="flex sm:hidden flex-col w-full h-full p-4 gap-4 justify-center items-center">
                <img
                  src="/avatars/HeadShot.png"
                  className="rounded-[14px] h-full aspect-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
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
        <div className="absolute w-full h-full xl:block hidden">
          <motion.div
            initial={{ x: "-100vw", width: 0 }}
            animate={{ width: "100vw", x: 0 }}
            transition={{ duration: 1, origin: 1 }}
          >
            <ThreeLines
              orientation={"horizontal"}
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
