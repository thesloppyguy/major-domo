"use client";

import { useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import HeaderSection from "@/components/header";
import FooterSection from "@/components/footer";
import AboutSection from "@/components/about";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("#000000");

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const getBackgroundColor = () => {
    const progress = scrollYProgress.get();
    if (progress < 0.35) {
      return "rgb(0, 0, 0)";
    }

    const normalizedProgress = (progress - 0.35) / 0.65;

    return `rgb(${Math.round(12 * normalizedProgress)}, ${Math.round(
      22 * normalizedProgress
    )}, ${Math.round(33 * normalizedProgress)})`;
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
        <HeaderSection handleToggle={handleToggle} isHome={false} />
        {children}
        <FooterSection handleToggle={handleToggle} />
      </main>
    </>
  );
}
