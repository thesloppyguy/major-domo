import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { animatePageOut } from "@/animations";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const images = [
  "https://images.unsplash.com/photo-1607385404764-380a5e06c7fe",
  "https://images.unsplash.com/photo-1570086625846-f33f679eb4f5",
  "https://images.unsplash.com/photo-1627645835237-0743e52b991f",
  "https://images.unsplash.com/photo-1648565496992-d1216d628508",
  "https://images.unsplash.com/photo-1659117656969-b19d9a95a69c",
  "https://images.unsplash.com/photo-1714251638631-3f5f92585617",
  "https://images.unsplash.com/photo-1544273573-67fe0493b0ef",
  "https://images.unsplash.com/photo-1613057389222-5c429f4ec162",
];
const ProjectsSection = () => {
  const router = useRouter();
  const [isPaused, setIsPaused] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: "auto",
      spacing: 16,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current && !isPaused) {
        instanceRef.current.next();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [instanceRef, isPaused]);

  return (
    <div
      id="projects"
      className="w-full overflow-hidden py-8 h-screen flex items-center justify-center"
    >
      <div
        ref={sliderRef}
        className="keen-slider w-full h-full py-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map((image, index) => (
          <div key={`${image}-${index}`} className="keen-slider__slide">
            <a
              href="#"
              className="relative block min-w-[400px] h-[80vh] overflow-hidden mr-2 group"
              onClick={(e) => {
                e.preventDefault();
                animatePageOut("/trivia", router);
              }}
            >
              <motion.div
                className="w-full h-full"
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
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 300px, 400px"
                  width={400}
                  height={400}
                  priority={index < 2}
                />
              </motion.div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
