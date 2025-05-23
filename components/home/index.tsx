"use client";
import React from "react";
import backgroundImage2 from "@/assets/background/Man.jpg";
import ParticleText from "../ParticleText";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen relative z-1"
    >
      <ParticleText backgroundImage={backgroundImage2} />
    </section>
  );
};

export default HomeSection;
