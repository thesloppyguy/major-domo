"use client";
import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
const Skills = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0.4, 0.55, 0.7], [0.85, 1, 1]);
  const opacity = useTransform(
    scrollYProgress,
    [0.4, 0.475, 0.55],
    [0.8, 1, 1]
  );

  return (
    <motion.div
      style={{ scale, opacity }}
      className="sticky top-0 h-screen flex text-[2vw] items-center justify-center bg-amber-900"
    >
      <h2 className="max-w-[45%] text-center leading-none text-red-500">
        This is an example of a sticky footer made with CSS.
      </h2>
    </motion.div>
  );
};

export default Skills;
