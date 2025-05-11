"use client";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import HomeSection from "../components/home";
import AboutSection from "../components/about";
import ExperienceSection from "../components/work";
import ProjectsSection from "../components/projects";
import SkillsSection from "../components/skills";
import HeaderSection from "../components/header";
import { useScroll } from "motion/react";
import SectionName from "@/components/SectionName";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("#000000");
  const [sectionName, setSectionName] = useState<
    "THE\nJOURNEY\nBEGINS" | "ALONG\nTHE\nWAY" | "WORK\nDONE\n" | ""
  >("THE\nJOURNEY\nBEGINS");

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const getBackgroundColor = () => {
    const progress = scrollYProgress.get();
    // Start transition at 35% scroll
    if (progress < 0.35) {
      return "rgb(0, 0, 0)"; // Stay black until 35%
    }

    // Normalize progress to 0-1 range starting from 35%
    const normalizedProgress = (progress - 0.35) / 0.65;

    // Transition from black to dark blue-gray
    return `rgb(${Math.round(12 * normalizedProgress)}, ${Math.round(
      22 * normalizedProgress
    )}, ${Math.round(33 * normalizedProgress)})`;
  };

  const getSectionName = () => {
    const progress = scrollYProgress.get();
    if (progress < 0.14) {
      return "";
    } else if (progress < 0.55) {
      return "THE\nJOURNEY\nBEGINS";
    } else if (progress < 0.9) {
      return "ALONG\nTHE\nWAY";
    } else {
      return "WORK\nDONE\n";
    }
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(getBackgroundColor());
      setSectionName(getSectionName());
    }, 100);
    return () => clearInterval(interval);
  }, [scrollYProgress]);

  return (
    <>
      <AboutSection isOpen={isOpen} handleToggle={handleToggle} />
      <main
        ref={container}
        style={{
          backgroundColor: getBackgroundColor(),
          minHeight: "100vh",
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "250px 250px",
        }}
      >
        <HeaderSection handleToggle={handleToggle} />
        <SectionName sectionName={sectionName} />
        <HomeSection />
        <ExperienceSection scrollYProgressGlobal={scrollYProgress} />
        <SkillsSection />
        <ProjectsSection />
      </main>
    </>
  );
}
