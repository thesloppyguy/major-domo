"use client";
import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";

const Experience = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.45, 0.5],
    [0.8, 1, 1, 0.8]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.2, 0.45, 0.5],
    [5, 0, 0, -5]
  );

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen flex text-[2vw] items-center justify-center bg-amber-400"
    >
      <h2 className="max-w-[45%] text-center leading-none text-red-500">
        This is an example of a sticky footer made with CSS.
      </h2>
    </motion.div>
  );
};

export default Experience;
