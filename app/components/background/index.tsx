"use client";
import React, { Children, useRef } from "react";
import * as motion from "motion/react-client";
import ThreeLines from "@/components/base/ThreeLines";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
const circle = {
  width: 300,
  height: 300,
  backgroundColor: "#384E41",
  borderRadius: 300,
};

const box1 = {
  width: 0,
  height: 100,
  backgroundColor: "#384E41",
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
};
const box2 = {
  width: 0,
  height: 30,
  backgroundColor: "#384E41",
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
};
const box3 = {
  width: 0,
  height: 30,
  backgroundColor: "#384E41",
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
};
const box4 = {
  width: 500,
  height: 0,
  backgroundColor: "#FEFCF0",
};
const box5 = {
  width: 500,
  height: 450,
};
const Background = ({ children, ...props }: { children: any }) => {
  const container = useRef<HTMLDivElement | null>(null);
  const circle = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.to(".box-stagger-1", { width: "720px", duration: 1, stagger: 0.2 });
      gsap.to(".box-stagger-2", { width: "900px", duration: 2, stagger: 0.2 });
      gsap.to(".box-stagger-3", { width: "1080px", duration: 3, stagger: 0.2 });
      gsap.to(".box-bottom-1", { height: "700px", duration: 1, stagger: 0.2 });
    },
    { scope: container }
  );
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="relative w-full h-full" ref={container}>
        <div
          className="box-stagger-1 absolute right-0 top-[50%] hidden sm:block"
          style={box1}
        />
        <div
          className="box-stagger-2 absolute right-0 top-[70%] hidden sm:block"
          style={box2}
        />
        <div
          className="box-stagger-3 absolute right-0 top-[80%] hidden sm:block"
          style={box3}
        />
        <div
          className="box-bottom-1 absolute hidden sm:block left-[15%] bottom-0 overflow-hidden border-l-[14px] border-r-[14px] border-t-[14px] border-[#7E7175] rounded-t-[15px]"
          style={box4}
        >
          <div className="flex flex-col w-full h-full p-4 gap-4">
            <div className="mt-auto rounded-[14px] bg-[#d3bca36f] h-[20%]"></div>
            <div className="rounded-[14px] bg-[#d2a677] opacity-50 w-full h-[40%]"></div>
          </div>
        </div>
        <div
          className="box-bottom-2 absolute hidden sm:block left-[15%] bottom-0 p-10 overflow-hidden"
          style={box5}
        >
          <div className="flex flex-col w-full h-full p-4 gap-4 justify-center items-center">
            <img
              src="/avatars/HeadShot.png"
              className="rounded-[14px] w-[80%]"
            />
          </div>
        </div>
        {/*

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
        <div className="relative w-full h-full">{children}</div> */}
      </div>
    </div>
  );
};

export default Background;
