"use client";
import Card from "@/components/base/card";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Image from "next/image";
import { projects } from "@/constants";
import { LinkIcon } from "lucide-react";
import AIModels from "@/assets/projects/headers/radio.jpeg";
import Stats from "@/assets/projects/headers/radio.jpeg";

const Trivia = () => {
  const container = useRef(null);
  const currentProject = projects[6];
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const getTargetScale = (i: number) => {
    return 1 - (4 - i) * 0.05;
  };

  return (
    <div ref={container} className="relative">
      <div className="inset-0 w-[100vw] bg-black/50 absolute top-0 blur-sm filter grayscale z-0">
        <Image
          src={currentProject.backgroundImage.src}
          alt="trivia"
          fill
          className="object-cover"
        />
      </div>
      <Card
        i={0}
        progress={scrollYProgress}
        range={[0 * 0.25, 1]}
        targetScale={getTargetScale(0)}
        color={"#222"}
        resizable={false}
      >
        <div className="flex flex-col md:flex-row h-full gap-6 md:gap-[50px] z-10">
          <div className="w-full md:w-[40%] relative flex flex-col gap-4 mb-6 md:mb-0">
            <h2 className="text-[48px] font-extrabold text-white mb-2 leading-tight">
              {currentProject.name}
            </h2>
            <div className="flex gap-2 justify-between">
              <div>
                <span className="text-gray-400 font-semibold">YEAR</span>
                <div className="text-white">{currentProject.year}</div>
              </div>
              <div>
                <span className="text-gray-400 font-semibold"></span>
                {currentProject.link && (
                  <div>
                    <a
                      href={currentProject.link}
                      target="_blank"
                      className="text-blue-400 underline text-lg font-semibold flex items-center gap-2"
                    >
                      <LinkIcon className="w-4 h-4" />{" "}
                      <span className="text-xs">NDA FREE DEMO</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div>
              <span className="text-gray-400 font-semibold">ABOUT</span>
              <div className="text-white">{currentProject.about}</div>
            </div>
          </div>
          <div className="relative w-full md:w-[60%] h-[200px] md:h-full rounded-[25px] overflow-hidden flex items-center justify-center">
            <motion.div className="w-full h-full" style={{ scale: 1 }}>
              <Image
                fill
                src={AIModels}
                alt="project image"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Card>
      <Card
        i={1}
        progress={scrollYProgress}
        range={[1 * 0.25, 1]}
        targetScale={getTargetScale(1)}
        color={"#ffffff"}
        resizable={false}
      >
        <div className="flex flex-col md:flex-row h-full gap-6 md:gap-[50px] z-10">
          <div className="w-full md:w-[40%] relative flex flex-col gap-4 mb-6 md:mb-0">
            {currentProject.vision && (
              <div>
                <span className="text-black font-semibold">VISION</span>
                <div className="text-gray-700">{currentProject.vision}</div>
              </div>
            )}
            <div>
              <span className="text-black font-semibold">ROLE</span>
              <div className="text-gray-700">{currentProject.role}</div>
            </div>
            <div>
              <span className="text-black font-semibold">STACK</span>
              <div className="text-gray-700">
                {Array.isArray(currentProject.stack)
                  ? currentProject.stack.join(", ")
                  : currentProject.stack}
              </div>
            </div>
          </div>
          <div className="relative w-full md:w-[60%] h-[200px] md:h-full overflow-hidden flex items-center justify-center">
            <motion.div className="w-full h-full" style={{ scale: 1 }}>
              <Image
                src={Stats}
                alt="project image"
                className="aspect-[16/9]"
              />
            </motion.div>
          </div>
        </div>
      </Card>
      <Card
        i={2}
        progress={scrollYProgress}
        range={[2 * 0.25, 1]}
        targetScale={getTargetScale(2)}
        color={"#222"}
      >
        <div className="flex flex-col md:flex-row h-full gap-6 md:gap-[50px] z-10">
          <div className="w-full md:w-[40%] relative flex flex-col gap-4 mb-6 md:mb-0">
            {currentProject.highlights &&
              currentProject.highlights.length > 0 && (
                <div>
                  <span className="text-gray-400 font-semibold">
                    HIGHLIGHTS
                  </span>
                  <ul className="text-white list-disc ml-5">
                    {currentProject.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}
            {currentProject.impact && (
              <div>
                <span className="text-gray-400 font-semibold">IMPACT</span>
                <div className="text-white">{currentProject.impact}</div>
              </div>
            )}
            {currentProject.lesson && (
              <div>
                <span className="text-gray-400 font-semibold">LESSON</span>
                <div className="text-white">{currentProject.lesson}</div>
              </div>
            )}
          </div>
          <div className="relative w-full md:w-[60%] h-[200px] md:h-full rounded-[25px] overflow-hidden flex items-center justify-center">
            <motion.div className="w-full h-full" style={{ scale: 1 }}>
              <video
                src="assets\projects\content\oneloki\Platform.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full aspect-[9/16]"
              />
            </motion.div>
          </div>
        </div>
      </Card>
      <Card
        i={3}
        progress={scrollYProgress}
        range={[3 * 0.25, 1]}
        targetScale={getTargetScale(3)}
        color={"#427AA1"}
        className="md:p-10"
      >
        <div className="flex flex-col md:flex-row h-full gap-6 md:gap-[10px] z-10">
          <motion.div className="w-full h-full" style={{ scale: 1 }}>
            <Image
              fill
              src={currentProject.architectureImage}
              alt="project image"
              className="aspect-[9/16] bg-white rounded-[25px]"
            />
          </motion.div>
        </div>
      </Card>
    </div>
  );
};

export default Trivia;
