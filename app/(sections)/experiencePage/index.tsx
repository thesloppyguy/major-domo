"use client";
import React, { FC } from "react";
import Name from "../background/Name";
import { PageProps } from "@/types";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const ExperiencesPage: FC<PageProps> = ({ scrollYProgress }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Keeps triggering in and out
    threshold: 0.2, // Triggers when 20% is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <div className="h-screen w-screen">
      <Name />
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 50, transition: { duration: 0.5 } },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        className="p-10 bg-blue-500 rounded-xl"
      >
        Scroll to see me!
      </motion.div>
    </div>
  );
};

export default ExperiencesPage;
