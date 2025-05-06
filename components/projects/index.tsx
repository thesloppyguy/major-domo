import React, { useCallback } from "react";
import Image from "next/image";

const ProjectsSection = () => {
  const images = [
    "https://images.unsplash.com/photo-1607385404764-380a5e06c7fe",
    "https://images.unsplash.com/photo-1570086625846-f33f679eb4f5",
    "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
    "https://images.unsplash.com/photo-1682687220067-dced0a2c8e44",
    "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
    "https://images.unsplash.com/photo-1682687220067-dced0a2c8e44",
  ];

  return (
    <div className="w-full overflow-hidden py-8 bg-blue-300">
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
