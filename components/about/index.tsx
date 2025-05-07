import React from "react";
import SlideUp from "../base/slideUp";
const AboutSection = () => {
  return (
    <div className="bg-black py-10">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <SlideUp>
          <h1 className="text-white text-4xl font-bold">About Me</h1>
        </SlideUp>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center py-10">
        <p className="text-white text-xl max-w-2xl text-center">
          Innovative software engineer with a passion for building
          transformational AI products and scalable systems. Experienced in
          leading end-to-end development of AI solutions, from large language
          models to real-time gaming platforms handling 100,000+ users.
          Proficient in designing and delivering GenAI apps, multimodal parsers,
          customer analytics, and scalable cloud-native applications. Driven by
          curiosity, ambition, and a relentless pursuit of real-world impact.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
