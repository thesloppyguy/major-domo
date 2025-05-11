import React, { useState } from "react";
import { InteractiveMarquee } from "./Marquee";
import "wipe.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { animatePageOut } from "@/animations";

const projects = [
  {
    name: "Lé Diff",
    image: "https://images.unsplash.com/photo-1607385404764-380a5e06c7fe",
  },
  {
    name: "Inventory Manager",
    image: "https://images.unsplash.com/photo-1570086625846-f33f679eb4f5",
  },
  {
    name: "T P 1",
    image: "https://images.unsplash.com/photo-1627645835237-0743e52b991f",
  },
  {
    name: "ATS",
    image: "https://images.unsplash.com/photo-1648565496992-d1216d628508",
  },
  {
    name: "A.I. Volution",
    image: "https://images.unsplash.com/photo-1659117656969-b19d9a95a69c",
  },
  {
    name: "Doc U",
    image: "https://images.unsplash.com/photo-1714251638631-3f5f92585617",
  },
  {
    name: "Neo Radio",
    image: "https://images.unsplash.com/photo-1544273573-67fe0493b0ef",
  },
  {
    name: "Media Stream",
    image: "https://images.unsplash.com/photo-1613057389222-5c429f4ec162",
  },
];

const ProjectsSection = () => {
  const router = useRouter();
  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <div
      id="projects"
      className="w-full overflow-hidden py-20 h-screen flex flex-col gap-4 items-center justify-center z-2 relative"
    >
      <div className="absolute inset-0 w-full h-full transition-opacity duration-500">
        <Image
          src={currentProject.image}
          alt="Background"
          fill
          className="object-cover blur-sm"
          priority
        />
      </div>
      <InteractiveMarquee>
        {projects.map((project, index) => (
          <a
            key={`${project.name}-${index}`}
            href="#"
            className="relative block min-w-[400px] h-[400px] overflow-hidden mr-2 group gap-3"
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
                src={project.image}
                alt={`Project image ${index + 1}`}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                sizes="(max-width: 768px) 300px, 400px"
                width={400}
                height={400}
                priority={index < 2}
              />
              <div className="absolute top-0 left-0 w-full h-[60px] flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-2xl rounded-full p-2 border-2 border-white bangers-regular">
                  {project.name}
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </InteractiveMarquee>
    </div>
  );
};

export default ProjectsSection;
