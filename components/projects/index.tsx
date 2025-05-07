import React, { useCallback } from "react";
import Image from "next/image";

const ProjectsSection = () => {
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

  return (
    <div className="w-full overflow-hidden py-8 bg-blue-300 h-screen align-center justify-center">
      <div className="embla">
        <div className="embla__container flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_100%] min-w-0 relative h-[400px] mx-2"
            >
              <Image
                src={image}
                alt={`Project image ${index + 1}`}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
