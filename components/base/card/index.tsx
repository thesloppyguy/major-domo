"use client";
import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";

type CardProps = {
  i: number;
  title?: string;
  description?: string;
  src?: string;
  url?: string;
  color?: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  children?: React.ReactNode;
};

const Card = ({
  i,
  color,
  progress,
  range,
  targetScale,
  children,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-1/4 h-[500px] w-[1000px] rounded-[25px] p-[50px] origin-top"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Card;
