"use client";
import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
const Projects = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0.7, 0.85, 1], [0.85, 1, 1]);
  const opacity = useTransform(
    scrollYProgress,
    [0.7, 0.775, 0.85],
    [0.8, 1, 1]
  );

  return (
    <motion.div
      style={{ scale, opacity }}
      className="sticky top-0 h-screen flex text-[2vw] items-center justify-center bg-blue-700"
    >
      <h2 className="max-w-[45%] text-center leading-none text-red-500">
        This is an example of a sticky footer made with CSS.
      </h2>
    </motion.div>
  );
};

export default Projects;
