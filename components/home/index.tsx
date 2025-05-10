"use client";
import React, { useState } from "react";
import Image from "next/image";
import backgroundImage2 from "../../assets/background/Man.jpg";
import useMousePosition from "@/hooks/useMousePosition";
import { motion } from "motion/react";
import styles from "./page.module.scss";
import ParticleText from "../ParticleText";

const HomeSection = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center h-screen relative z-1"
    >
      <ParticleText backgroundImage={backgroundImage2} />
    </div>
  );
};

export default HomeSection;
