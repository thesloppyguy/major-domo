"use client";
import React, { FC } from "react";
import Name from "../background/Name";
import { PageProps } from "@/types";
import Background from "../background";

const HomePage: FC<PageProps> = ({ scrollYProgress }) => {
  return (
    <div className="h-screen w-screen">
      <Name />
    </div>
  );
};

export default HomePage;
