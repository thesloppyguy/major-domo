import React, { useState } from "react";
import { InteractiveMarquee } from "./Marquee";
// import "wipe.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { animatePageOut } from "@/animations";
import { projects } from "@/constants";

const ProjectsSection = () => {
  const router = useRouter();
  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <section
      id="projects"
      className="w-full overflow-hidden h-screen flex flex-col gap-4 items-center justify-center z-2 relative"
    >
      <div className="absolute inset-0 w-full h-full transition-opacity duration-500">
        <Image
          src={currentProject.image.src}
          alt="Background"
          fill
          className="object-cover blur-sm filter grayscale"
          priority
        />
      </div>
      <InteractiveMarquee>
        {projects.map((project, index) => (
          <a
            key={`${project.name}-${index}`}
            href="#"
            className="relative block min-w-[400px] h-[400px] overflow-hidden group gap-3"
            onClick={(e) => {
              e.preventDefault();
              animatePageOut("/trivia", router);
            }}
            onMouseEnter={() => setCurrentProject(project)}
          >
            <motion.div
              className="w-full h-full"
              animate={{
                x: [0, 20, 0],
              }}
              transition={{
                duration: 4,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.5,
                  repeat: 0,
                  repeatType: "reverse",
                },
              }}
            >
              <Image
                src={project.image.src}
                alt={`Project image ${index + 1}`}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                sizes="(max-width: 768px) 300px, 400px"
                width={400}
                height={400}
                priority={index < 2}
              />
              <div className="absolute top-0 left-0 w-full h-[60px] flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-2xl bangers-regular">
                  {project.name}
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </InteractiveMarquee>
    </section>
  );
};

export default ProjectsSection;
