"use client";
import { animatePageOut } from "@/animations";
import React from "react";
import { useRouter } from "next/navigation";

const TriviaGame = () => {
  const router = useRouter();
  return (
    <div>
      TriviaGame
      <button
        onClick={() => {
          animatePageOut("/#projects", router);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default TriviaGame;
