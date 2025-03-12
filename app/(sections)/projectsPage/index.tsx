"use client";
import React, { FC } from "react";
import Name from "../background/Name";
import { PageProps } from "@/types";

const ProjectsPage: FC<PageProps> = ({ scrollYProgress }) => {
  return (
    <div className="h-screen w-screen">
      <Name />
    </div>
  );
};

export default ProjectsPage;
