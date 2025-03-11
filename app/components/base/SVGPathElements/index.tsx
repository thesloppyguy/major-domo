"use client";
import React, { useEffect, useState } from "react";

const SVGPathWithElements = () => {
  const [points, setPoints] = useState<any[]>([]);

  useEffect(() => {
    const svg = document.getElementById("svg-container");
    const paths = svg?.querySelectorAll("path");
    let newPoints: any[] = [];

    paths?.forEach((path, index) => {
      const length = path.getTotalLength();
      const point = path.getPointAtLength(length);
      newPoints.push({ x: point.x, y: point.y, id: `point-${index}` });
    });

    setPoints(newPoints);
  }, []);

  return (
    <div className="flex justify-center w-full h-full p-10">
      <div style={{ position: "relative", width: "600px", height: "400px" }}>
        <svg
          id="svg-container"
          version="1.0"
          height="400"
          width="600"
          viewBox="0 0 915 580"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto"
        >
          {/* Curves */}
          <path
            d="M 18.898132,563.14957 A 543.94263,543.75146 0 0 1 562.84077,19.398132"
            stroke="black"
            strokeWidth="2.66"
            fill="none"
          />
          <path
            d="M -899.02731,355.46605 A 336.18655,336.06839 0 0 1 -562.84075,19.397675"
            transform="scale(-1,1)"
            stroke="black"
            strokeWidth="2.66"
            fill="none"
          />
          <path
            d="m -563.14906,-691.27235 a 207.68251,207.75557 0 0 1 207.68251,-207.75556"
            transform="matrix(0,-1,-1,0,0,0)"
            stroke="black"
            strokeWidth="2.66"
            fill="none"
          />
          <path
            d="M 562.84128,-434.76319 A 128.43051,128.38536 0 0 1 691.27179,-563.14854"
            transform="scale(1,-1)"
            stroke="black"
            strokeWidth="2.66"
            fill="none"
          />
          <path
            d="m 562.84184,434.7637 a 79.324539,79.296654 0 0 1 79.32454,-79.29665"
            stroke="black"
            strokeWidth="2.66"
            fill="none"
          />
        </svg>

        {/* Render Circles at End of Each Path */}
        {points.map((point) => (
          <svg
            key={point.id}
            style={{
              position: "absolute",
              left: `${point.x}px`,
              top: `${point.y}px`,
              overflow: "visible",
            }}
          >
            <circle cx="0" cy="0" r="5" fill="red" />
          </svg>
        ))}

        {/* Attach HTML Divs to Points */}
        {points.map((point) => (
          <div
            key={`div-${point.id}`}
            style={{
              position: "absolute",
              left: `${point.x + 10}px`,
              top: `${point.y}px`,
              background: "lightblue",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            Info {point.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SVGPathWithElements;
