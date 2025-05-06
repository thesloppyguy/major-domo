import React from "react";

const FloatingBubble = ({ x, y }: { x: number; y: number }) => {
  return (
    <div
      className="absolute pointer-events-none z-100"
      style={{
        transition: "transform 0.1s ease-out",
        transform: `translate(${x + 10}px, ${y - 10}px)`,
      }}
    >
      <div className="bg-white/10 backdrop-blur-md rounded-full p-2 text-white text-sm shadow-lg border border-white/20">
        ⌘K
      </div>
    </div>
  );
};

export default FloatingBubble;
