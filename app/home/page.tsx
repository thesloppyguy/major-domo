"use client";
import HomePage from "@/(sections)/homePage";
import Background from "../(sections)/background";
import ExperiencesPage from "@/(sections)/experiencePage";
import SkillsPage from "@/(sections)/skillsPage";
import ProjectsPage from "@/(sections)/projectsPage";
import BlogsPage from "@/(sections)/blogsPage";
import { useRef } from "react";
import { useScroll } from "framer-motion";

export default function Home() {
  const container = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <main className="relative h-[200vh]" ref={container}>
      {/* <Background> */}
      <HomePage scrollYProgress={scrollYProgress} />
      <ExperiencesPage scrollYProgress={scrollYProgress} />
      <SkillsPage scrollYProgress={scrollYProgress} />
      <ProjectsPage scrollYProgress={scrollYProgress} />
      <BlogsPage scrollYProgress={scrollYProgress} />
      {/* </Background> */}
    </main>
  );
}
