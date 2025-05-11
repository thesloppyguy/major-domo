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
import useWindowSize from "@/hooks/useWindowSize";
import Texture from "../../assets/texture/Texture.png";
import Texture2 from "../../assets/texture/Pattern.svg";
import { Github, School, Star } from "lucide-react";
import Replit from "../../assets/logos/New Replit Logo.svg";

const work = [
  {
    id: 1,
    image: Infant,
    title: "Trainee Dev",
    company: "Algotrak Pvt Ltd",
    date: "Oct 2021 - May 2022",
    description:
      "Enhanced multilingual handwritten text recognition models and built OCR pipelines, achieving 99%+ model accuracy. Processed over 600,000 documents to extract structured data. Developed image processing solutions using OpenCV.",
  },
  {
    id: 2,
    image: Baby,
    title: "Software Engineer Intern",
    company: "Lokibots",
    date: "Nov 2022 - Jan 2023",
    description:
      "Implemented LRU caching, boosting chatbot speeds by 10x. Automated frontend test pipelines, enhancing QA by 20%. Early exposure to real-world AI product development and optimizations.",
  },
  {
    id: 3,
    image: child,
    title: "Software Engineer",
    company: "Lokibots",
    date: "Feb 2023 - Oct 2023",
    description:
      "Built ATS platforms with multimodal parsers and finance chatbots. Reduced candidate search time by 80% and improved data accuracy by 90%. Delivered production-grade LLM-powered tools.",
  },
  {
    id: 4,
    image: adolescent,
    title: "Software Engg. Manager",
    company: "Lokibots",
    date: "Nov 2023 - Apr 2024",
    description:
      "Led frontend modernization with React, built scalable search systems over 1M+ documents, and engineered top-tier AI parsers. Achieved over 99% parsing accuracy, outpacing competitors.",
  },
  {
    id: 5,
    image: adult,
    title: "Sr. Software Engg. Mgr",
    company: "Lokibots",
    date: "Apr 2024 - Mar 2025",
    description:
      "Built a Gen AI App Platform supporting RAGs, workflows, and API deployments, adopted by 5+ enterprises. Delivered on-premise AI solutions for clients like HDBFS and Reliance, impacting over 200,000 users.",
  },
  {
    id: 6,
    image: elderly,
    title: "Engineering Director",
    company: "Lokibots",
    date: "Apr 2025 - Present",
    description:
      "Spearheading humanoid AI support models at global airports. Architected conversational analytics systems processing over 1M+ customer interactions monthly. Driving next-gen AI solutions at scale.",
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

  const { width } = useWindowSize();
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
                [400, 25, 25, 100]
              ),
              x: useTransform(
                scrollYProgress,
                [0, 1],
                [width / 2 - 400, width / 2 - 400]
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
            className="w-[400px] h-[600px] flex flex-col border-8 border-[#efc95d]"
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
                [400, 25, 25, 100]
              ),
              x: useTransform(
                scrollYProgress,
                [0, 1],
                [width / 2 - 200, width / 2 - 200]
              ),
            }}
          >
            <motion.div
              id="card-header"
              style={{
                backgroundImage: `url(${Texture2.src})`,
                backgroundRepeat: "repeat",
                backgroundSize: "auto",
                backgroundBlendMode: "multiply",
              }}
              className="flex bangers-regular text-6xl justify-center items-center rounded-t-lg bg-[#83a17f] text-white"
            >
              <motion.div
                style={{
                  opacity: useTransform(scrollYProgress, [0.3, 0.35], [1, 0]),
                }}
                className="text-[#e7e5d0]"
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
                className="text-[#e7e5d0] text-4xl"
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
                className="text-[#e7e5d0] text-4xl"
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
                className="text-[#e7e5d0] text-4xl"
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
                className="text-[#e7e5d0] text-4xl"
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
                className="text-[#e7e5d0] text-4xl"
              >
                {work[5].title}
              </motion.div>
            </motion.div>
            <motion.div
              id="card-body"
              className="flex flex-col flex-grow bangers-regular text-4xl w-full items-center rounded-b-lg relative overflow-hidden"
              style={{
                backgroundImage: `url(${Texture2.src})`,
                backgroundRepeat: "repeat",
                backgroundSize: "auto",
                backgroundPosition: "center",
                backgroundColor: "rgba(143, 199, 173, 0.5)",
                backgroundBlendMode: "soft-light",
              }}
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
              className="flex-col absolute bottom-0 left-0 right-0 flex min-h-[20%] z-10 px-10 pb-5 pt-1 m-3 rounded-lg border-3 border-black"
              style={{
                background:
                  "linear-gradient(to bottom, #8fc8ad, #dfdac7, #8fc8ad)",
              }}
            >
              <motion.div
                style={{
                  opacity: useTransform(scrollYProgress, [0.3, 0.35], [1, 0]),
                  inset: 0,
                }}
              >
                <div
                  id="company-name"
                  className="flex justify-center items-center mb-2"
                >
                  <div className="bg-[#7e9b81] p-1 border-2 border-white text-[#e7e5d0] rounded-lg text-center w-full bangers-regular">
                    {work[0].company}
                  </div>
                </div>
                <div className="text-black text-[14px] bangers-regular flex justify-center items-center text-center">
                  {work[0].description}
                </div>
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
                }}
                className="flex flex-col px-10 pb-5 pt-1"
              >
                <div
                  id="company-name"
                  className="flex justify-center items-center mb-2"
                >
                  <div className="bg-[#7e9b81] p-1 border-2 border-white text-[#e7e5d0] rounded-lg text-center w-full bangers-regular">
                    {work[1].company}
                  </div>
                </div>
                <div className="text-black text-[14px] bangers-regular flex justify-center items-center text-center">
                  {work[1].description}
                </div>
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
                }}
                className="flex flex-col px-10 pb-5 pt-1"
              >
                <div
                  id="company-name"
                  className="flex justify-center items-center mb-2"
                >
                  <div className="bg-[#7e9b81] p-1 border-2 border-white text-[#e7e5d0] rounded-lg text-center w-full bangers-regular">
                    {work[2].company}
                  </div>
                </div>
                <div className="text-black text-[14px] bangers-regular flex justify-center items-center text-center">
                  {work[2].description}
                </div>
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
                }}
                className="flex flex-col px-10 pb-5 pt-1"
              >
                <div
                  id="company-name"
                  className="flex justify-center items-center mb-2"
                >
                  <div className="bg-[#7e9b81] p-1 border-2 border-white text-[#e7e5d0] rounded-lg text-center w-full bangers-regular">
                    {work[3].company}
                  </div>
                </div>
                <div className="text-black text-[14px] bangers-regular flex justify-center items-center text-center">
                  {work[3].description}
                </div>
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
                }}
                className="flex flex-col px-10 pb-5 pt-1"
              >
                <div
                  id="company-name"
                  className="flex justify-center items-center mb-2"
                >
                  <div className="bg-[#7e9b81] p-1 border-2 border-white text-[#e7e5d0] rounded-lg text-center w-full bangers-regular">
                    {work[4].company}
                  </div>
                </div>
                <div className="text-black text-[14px] bangers-regular flex justify-center items-center text-center">
                  {work[4].description}
                </div>
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
                }}
                className="flex flex-col px-10 pb-5 pt-1"
              >
                <div
                  id="company-name"
                  className="flex justify-center items-center mb-2"
                >
                  <div className="bg-[#7e9b81] p-1 border-2 border-white text-[#e7e5d0] rounded-lg text-center w-full bangers-regular">
                    {work[5].company}
                  </div>
                </div>
                <div className="text-black text-[14px] bangers-regular flex justify-center items-center text-center">
                  {work[5].description}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-[400px] h-[150px] flex absolute border-black border-3"
            animate={{
              backgroundImage: `url(${Texture2.src})`,
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
              backgroundBlendMode: "multiply",
              // backgroundColor:
              //   "linear-gradient(to bottom, #efc95d, #dfdac7, #efc95d)",
              backgroundColor: "rgba(143, 199, 173, 1)",
              borderRadius: "10px",
              padding: "5px",
              boxShadow:
                "0 0 20px rgba(0, 0, 0, 0.1), 0 0 40px rgba(234, 174, 67, 0.2)",
            }}
            style={{
              y: useTransform(scrollYProgress, [0, 1], [5700, -10000]),
              x: useTransform(
                scrollYProgress,
                [0, 1],
                [
                  width < 768 ? width / 2 - 200 : width / 2 - 500,
                  width < 768 ? width / 2 - 200 : width / 2 - 500,
                ]
              ),
            }}
          >
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center justify-center padding-10">
                <div className="flex flex-col items-center justify-center bangers-regular text-4xl">
                  <svg
                    width="100px"
                    height="100px"
                    viewBox="0 0 15 15"
                    id="college"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#716d2f"
                      d="M7.5,1L0,4.5l2,0.9v1.7C1.4,7.3,1,7.9,1,8.5s0.4,1.2,1,1.4V10l-0.9,2.1&#xA; C0.8,13,1,14,2.5,14s1.7-1,1.4-1.9L3,10c0.6-0.3,1-0.8,1-1.5S3.6,7.3,3,7.1V5.9L7.5,8L15,4.5L7.5,1z M11.9,7.5l-4.5,2L5,8.4v0.1&#xA; c0,0.7-0.3,1.3-0.8,1.8l0.6,1.4v0.1C4.9,12.2,5,12.6,4.9,13c0.7,0.3,1.5,0.5,2.5,0.5c3.3,0,4.5-2,4.5-3L11.9,7.5L11.9,7.5z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center bangers-regular text-2xl text-center">
                  Graduated with Bachelors in Engineering with 3.4 GPA.
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="cursor-pointer w-[400px] md:w-[200px] h-[200px] flex flex-col absolute border-black border-3"
            animate={{
              background:
                "linear-gradient(to bottom, #efc95d, #dfdac7, #efc95d)",
              borderRadius: "10px",
              padding: "5px",
              boxShadow:
                "0 0 20px rgba(0, 0, 0, 0.1), 0 0 40px rgba(234, 174, 67, 0.2)",
            }}
            style={{
              y: useTransform(scrollYProgress, [0, 1], [9000, -9000]),
              x: useTransform(
                scrollYProgress,
                [0, 1],
                [
                  width < 768 ? width / 2 - 200 : width / 2 - 350,
                  width < 768 ? width / 2 - 200 : width / 2 - 350,
                ]
              ),
            }}
            onClick={() => {
              window.open("https://github.com/thesloppyguy", "_blank");
            }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-center padding-10">
                  <div className="flex flex-col items-center justify-center bangers-regular text-4xl">
                    <Github className="w-10 h-10 text-[#ffffff] bg-black rounded-full p-2" />
                  </div>
                  <div className="flex flex-col items-center justify-center bangers-regular text-4xl">
                    <Image src={Replit} alt="Replit" className="w-10 h-10" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center justify-center bangers-regular text-lg text-center">
                    Started contributing on some open source projects and
                    scoring some bounties.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-[400px] md:w-[200px] h-[200px] flex-col absolute hidden md:flex border-black border-3"
            animate={{
              background:
                "linear-gradient(to bottom, #efc95d, #dfdac7, #efc95d)",
              borderRadius: "10px",
              padding: "5px",
              boxShadow:
                "0 0 20px rgba(0, 0, 0, 0.1), 0 0 40px rgba(234, 174, 67, 0.2)",
            }}
            style={{
              y: useTransform(
                scrollYProgress,
                [0, 0.6, 0.9, 1],
                [1500, 0, 0, 300]
              ),
              x: useTransform(
                scrollYProgress,
                [0, 1],
                [
                  width < 768 ? width / 2 - 200 : width / 2 + 250,
                  width < 768 ? width / 2 - 200 : width / 2 + 250,
                ]
              ),
            }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-center padding-10">
                  <div className="flex flex-col items-center justify-center bangers-regular text-4xl">
                    <Star className="w-10 h-10 text-[#ffffff] bg-black rounded-full p-2" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center justify-center bangers-regular text-lg text-center">
                    Working with some local businesses to build their solutions
                    and getting some active freelance work.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
