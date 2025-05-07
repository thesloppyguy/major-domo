"use client";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import HomeSection from "../components/home";
import AboutSection from "../components/about";
import ExperienceSection from "../components/work";
import ProjectsSection from "../components/projects";
import SkillsSection from "../components/skills";
import ContactSection from "../components/contact";
import FooterSection from "../components/footer";
import HeaderSection from "../components/header";
// import FloatingBubble from "../components/FloatingBubble";
import ChatWindow from "../components/ChatWindow";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
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
      {/* <FloatingBubble x={mousePosition.x} y={mousePosition.y} /> */}
      <ChatWindow handleToggle={handleToggle} isOpen={isOpen} />
      <main
        ref={container}
        className="w-full bg-blue-900 overflow-x-hidden overflow-y-auto"
      >
        <header className="w-full z-50 fixed top-0 bg-gradient-to-b from-black/30 to-transparent">
          <HeaderSection handleToggle={handleToggle} />
        </header>
        <HomeSection />
        <AboutSection />
        {/* <ExperienceSection /> */}
        {/* <ProjectsSection /> */}
        {/* <SkillsSection /> */}
        {/* <ContactSection /> */}
      </main>
      <footer className="w-full bg-black sticky top-0">
        <FooterSection />
      </footer>
    </>
  );
}
