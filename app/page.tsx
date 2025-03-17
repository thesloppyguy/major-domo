"use client";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import StickyFooter from "./components/base/StickyFooter";
import Footer from "./(commonLayout)/Footer";
import Hero from "./(commonLayout)/hero";
import Experience from "./(commonLayout)/experience";
import Skills from "./(commonLayout)/skills";
import Projects from "./(commonLayout)/projects";
import { useScroll, useTransform, motion } from "framer-motion";

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
      <main ref={container} className="relative h-[400vh]">
        <Hero scrollYProgress={scrollYProgress} />
        <Experience scrollYProgress={scrollYProgress} />
        <Skills scrollYProgress={scrollYProgress} />
        <Projects scrollYProgress={scrollYProgress} />
      </main>
      {/* <footer>
        <StickyFooter>
          <Footer />
        </StickyFooter>
      </footer> */}
    </>
  );
}
