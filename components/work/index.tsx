"use client";
import React, { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Infant from "../../assets/experience/infant.png";
import Baby from "../../assets/experience/baby.png";
import child from "../../assets/experience/child.png";
import adolescent from "../../assets/experience/teen.png";
import adult from "../../assets/experience/adult.png";
import elderly from "../../assets/experience/old.png";

const work = [
  {
    id: 1,
    image: Infant,
    title: "INFANT",
    description:
      "From birth to 12 months, marked by rapid growth, motor skill development, and the beginning of social interaction.",
  },
  {
    id: 2,
    image: Baby,
    title: "BABY",
    description:
      "Ages 1-2 years, characterized by walking, first words, and developing independence while still requiring close care.",
  },
  {
    id: 3,
    image: child,
    title: "CHILD",
    description:
      "Ages 3-12 years, a period of significant cognitive development, social learning, and physical growth.",
  },
  {
    id: 4,
    image: adolescent,
    title: "ADOLESCENT",
    description:
      "Ages 13-19 years, marked by puberty, emotional development, and the transition toward adulthood.",
  },
  {
    id: 5,
    image: adult,
    title: "ADULT",
    description:
      "Ages 20-64 years, characterized by independence, career development, and establishing long-term relationships.",
  },
  {
    id: 6,
    image: elderly,
    title: "ELDERLY",
    description:
      "Ages 65 and above, a stage of wisdom, retirement, and adapting to physical and social changes.",
  },
];

const WorkSection = ({
  scrollYProgressGlobal,
}: {
  scrollYProgressGlobal: MotionValue<number>;
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  return (
    <section ref={targetRef} className="relative h-[300vh]" id="work">
      <div className="sticky top-0 h-screen overflow-hidden z-10">
        <div className="relative h-screen flex flex-col justify-center gap-8">
          <motion.div
            style={{
              position: "absolute",
              zIndex: 0,
              pointerEvents: "none",
              y: useTransform(
                scrollYProgress,
                [0, 0.2, 0.9, 1],
                [1000, 25, 25, 100]
              ),
              x: useTransform(
                scrollYProgress,
                [0, 1],
                [window.innerWidth / 2 - 400, window.innerWidth / 2 - 400]
              ),
            }}
          >
            <svg width="800" height="800">
              <defs>
                <radialGradient
                  id="backlight"
                  cx="50%"
                  cy="50%"
                  r="50%"
                  fx="50%"
                  fy="50%"
                >
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.5)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                </radialGradient>
              </defs>
              <circle cx="400" cy="400" r="400" fill="url(#backlight)" />
            </svg>
          </motion.div>
          <motion.div
            id="work-card"
            className="w-[400px] h-[600px] flex flex-col"
            animate={{
              background: "white",
              borderRadius: "10px",
              padding: "5px",
              boxShadow:
                "0 0 20px rgba(0, 0, 0, 0.1), 0 0 40px rgba(234, 174, 67, 0.2)",
            }}
            style={{
              y: useTransform(
                scrollYProgress,
                [0, 0.2, 0.9, 1],
                [1000, 25, 25, 100]
              ),
              x: useTransform(
                scrollYProgress,
                [0, 1],
                [window.innerWidth / 2 - 200, window.innerWidth / 2 - 200]
              ),
            }}
          >
            <motion.div
              id="card-header"
              className="flex bangers-regular text-6xl justify-center items-center rounded-t-lg bg-[#f74a53] text-white"
            >
              <motion.div
                style={{
                  opacity: useTransform(scrollYProgress, [0.3, 0.35], [1, 0]),
                }}
              >
                {work[0].title}
              </motion.div>
              <motion.div
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0.3, 0.35, 0.45, 0.5],
                    [0, 1, 1, 0]
                  ),
                  position: "absolute",
                }}
              >
                {work[1].title}
              </motion.div>
              <motion.div
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0.45, 0.5, 0.6, 0.65],
                    [0, 1, 1, 0]
                  ),
                  position: "absolute",
                }}
              >
                {work[2].title}
              </motion.div>
              <motion.div
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0.6, 0.65, 0.75, 0.8],
                    [0, 1, 1, 0]
                  ),
                  position: "absolute",
                }}
              >
                {work[3].title}
              </motion.div>
              <motion.div
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0.75, 0.8, 0.9, 0.95],
                    [0, 1, 1, 0]
                  ),
                  position: "absolute",
                }}
              >
                {work[4].title}
              </motion.div>
              <motion.div
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0.9, 0.95, 1],
                    [0, 1, 1]
                  ),
                  position: "absolute",
                }}
              >
                {work[5].title}
              </motion.div>
            </motion.div>
            <motion.div
              id="card-body"
              className="flex flex-col flex-grow bangers-regular text-4xl w-full items-center rounded-b-lg relative overflow-hidden"
            >
              <motion.div
                style={{
                  opacity: useTransform(scrollYProgress, [0.3, 0.35], [1, 0]),
                }}
              >
                <Image
                  src={work[0].image}
                  alt={work[0].title}
                  className="w-full h-full object-contain p-4 relative z-10"
                  priority
                />
              </motion.div>
              <motion.div
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0.3, 0.35, 0.45, 0.5],
                    [0, 1, 1, 0]
                  ),
                  position: "absolute",
                  inset: 0,
                  zIndex: 10,
                }}
              >
                <Image
                  src={work[1].image}
                  alt={work[1].title}
                  className="w-full h-full object-contain p-4"
                  priority
                />
              </motion.div>
              <motion.div
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0.45, 0.5, 0.6, 0.65],
                    [0, 1, 1, 0]
                  ),
                  position: "absolute",
                  inset: 0,
                  zIndex: 10,
                }}
              >
                <Image
                  src={work[2].image}
                  alt={work[2].title}
                  className="w-full h-full object-contain p-4"
                  priority
                />
              </motion.div>
              <motion.div
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0.6, 0.65, 0.75, 0.8],
                    [0, 1, 1, 0]
                  ),
                  position: "absolute",
                  inset: 0,
                  zIndex: 10,
                }}
              >
                <Image
                  src={work[3].image}
                  alt={work[3].title}
                  className="w-full h-full object-contain p-4"
                  priority
                />
              </motion.div>
              <motion.div
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0.75, 0.8, 0.9, 0.95],
                    [0, 1, 1, 0]
                  ),
                  position: "absolute",
                  inset: 0,
                  zIndex: 10,
                }}
              >
                <Image
                  src={work[4].image}
                  alt={work[4].title}
                  className="w-full h-full object-contain p-4"
                  priority
                />
              </motion.div>
              <motion.div
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0.9, 0.95, 1],
                    [0, 1, 1]
                  ),
                  position: "absolute",
                  inset: 0,
                  zIndex: 10,
                }}
              >
                <Image
                  src={work[5].image}
                  alt={work[5].title}
                  className="w-full h-full object-contain p-4"
                  priority
                />
              </motion.div>
            </motion.div>
            <motion.div
              id="card-footer"
              className="absolute bottom-0 left-0 right-0 flex bangers-regular text-6xl justify-center items-center text-white min-h-[20%] z-10 p-10"
            >
              <motion.div
                style={{
                  opacity: useTransform(scrollYProgress, [0.3, 0.35], [1, 0]),
                }}
              >
                {work[0].description}
              </motion.div>
              <motion.div
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0.3, 0.35, 0.45, 0.5],
                    [0, 1, 1, 0]
                  ),
                  position: "absolute",
                }}
              >
                {work[1].description}
              </motion.div>
              <motion.div
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0.45, 0.5, 0.6, 0.65],
                    [0, 1, 1, 0]
                  ),
                  position: "absolute",
                }}
              >
                {work[2].description}
              </motion.div>
              <motion.div
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0.6, 0.65, 0.75, 0.8],
                    [0, 1, 1, 0]
                  ),
                  position: "absolute",
                }}
              >
                {work[3].description}
              </motion.div>
              <motion.div
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0.75, 0.8, 0.9, 0.95],
                    [0, 1, 1, 0]
                  ),
                  position: "absolute",
                }}
              >
                {work[4].description}
              </motion.div>
              <motion.div
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0.9, 0.95, 1],
                    [0, 1, 1]
                  ),
                  position: "absolute",
                }}
              >
                {work[5].description}
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-[400px] md:w-[200px] h-[200px] flex flex-col absolute"
            animate={{
              background: "white",
              borderRadius: "10px",
              padding: "5px",
              boxShadow:
                "0 0 20px rgba(0, 0, 0, 0.1), 0 0 40px rgba(234, 174, 67, 0.2)",
            }}
            style={{
              y: useTransform(scrollYProgress, [0, 1], [6400, -9000]),
              x: useTransform(
                scrollYProgress,
                [0, 1],
                [
                  window.innerWidth < 768
                    ? window.innerWidth / 2 - 200
                    : window.innerWidth / 2 - 350,
                  window.innerWidth < 768
                    ? window.innerWidth / 2 - 200
                    : window.innerWidth / 2 - 350,
                ]
              ),
            }}
          ></motion.div>
          <motion.div
            className="w-[400px] h-[200px] flex flex-col absolute"
            animate={{
              background: "white",
              borderRadius: "10px",
              padding: "5px",
              boxShadow:
                "0 0 20px rgba(0, 0, 0, 0.1), 0 0 40px rgba(234, 174, 67, 0.2)",
            }}
            style={{
              y: useTransform(scrollYProgress, [0, 1], [4700, -10000]),
              x: useTransform(
                scrollYProgress,
                [0, 1],
                [
                  window.innerWidth < 768
                    ? window.innerWidth / 2 - 200
                    : window.innerWidth / 2 - 500,
                  window.innerWidth < 768
                    ? window.innerWidth / 2 - 200
                    : window.innerWidth / 2 - 500,
                ]
              ),
            }}
          ></motion.div>
          <motion.div
            className="w-[400px] md:w-[200px] h-[200px] flex flex-col absolute"
            animate={{
              background: "white",
              borderRadius: "10px",
              padding: "5px",
              boxShadow:
                "0 0 20px rgba(0, 0, 0, 0.1), 0 0 40px rgba(234, 174, 67, 0.2)",
            }}
            style={{
              y: useTransform(scrollYProgress, [0, 0.6], [1500, 300]),
              x: useTransform(
                scrollYProgress,
                [0, 1],
                [
                  window.innerWidth < 768
                    ? window.innerWidth / 2 - 200
                    : window.innerWidth / 2 + 250,
                  window.innerWidth < 768
                    ? window.innerWidth / 2 - 200
                    : window.innerWidth / 2 + 250,
                ]
              ),
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
