"use client";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import HomeSection from "../components/home";
import AboutSection from "../components/about";
import ExperienceSection from "../components/work";
import ProjectsSection from "../components/projects";
import SkillsSection from "../components/skills";
import ContactSection from "../components/contact";
import FooterSection from "../components/footer";
export default function Home() {
  const container = useRef(null);

  const { scrollX, scrollY, scrollYProgress, scrollXProgress } = useScroll({
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

  return (
    <>
      <main ref={container} className="w-full bg-black overflow-x-hidden">
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="w-full bg-black">
        <FooterSection />
      </footer>
    </>
  );
}
