"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import cn from "classnames";

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
  resizable?: boolean;
  className?: string;
};

const Card = ({
  i,
  color,
  progress,
  range,
  targetScale,
  children,
  resizable = true,
  className,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Responsive size defaults
  const getDefaultSize = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return {
        width: window.innerWidth * 0.95,
        height: window.innerHeight * 0.7,
      };
    }
    return { width: 1000, height: 500 };
  };
  const [size, setSize] = useState(getDefaultSize());
  const [resizing, setResizing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [startSize, setStartSize] = useState(getDefaultSize());

  // Update size on window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSize({
          width: window.innerWidth * 0.95,
          height: window.innerHeight * 0.7,
        });
      } else {
        setSize((prev) => ({
          width: prev.width < 300 ? 1000 : prev.width,
          height: prev.height < 200 ? 500 : prev.height,
        }));
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Only allow resizing on desktop
  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth >= 768 : true;

  const onMouseDown = (e: React.MouseEvent) => {
    if (!resizable || !isDesktop) return;
    e.preventDefault();
    setResizing(true);
    setStartPos({ x: e.clientX, y: e.clientY });
    setStartSize({ ...size });
    document.body.style.userSelect = "none";
  };

  // Mouse move and up handlers
  React.useEffect(() => {
    if (!resizing) return;
    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;
      setSize({
        width: Math.max(300, startSize.width + dx),
        height: Math.max(200, startSize.height + dy),
      });
    };
    const onMouseUp = () => {
      setResizing(false);
      document.body.style.userSelect = "";
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [resizing, startPos, startSize]);

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
          width: size.width,
          height: size.height,
          maxWidth: "95vw",
          maxHeight: "90vh",
        }}
        className={cn(`flex flex-col relative -top-1/4 rounded-[25px] p-[24px] md:p-[50px] origin-top shadow-lg`, className)}
      >
        {children}
        {/* Resize handle (desktop only) */}
        {resizable && isDesktop && (
          <div
            onMouseDown={onMouseDown}
            className="absolute bottom-2 right-2 w-5 h-5 bg-gray-400 rounded cursor-se-resize z-20 flex items-center justify-center"
            style={{ userSelect: "none" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 14L14 2"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8 14L14 8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M14 14H10"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Card;
