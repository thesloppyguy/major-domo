"use client";
import React, { useEffect, useState } from "react";

const SectionName = ({ sectionName }: { sectionName: string }) => {
  const [displayLines, setDisplayLines] = useState<string[][]>([]);
  const [targetLines, setTargetLines] = useState<string[][]>([]);

  useEffect(() => {
    const currentText = displayLines
      .map((line) => line.join("").trim())
      .join("\n");
    if (sectionName !== currentText) {
      // Split the text into lines
      const lines = sectionName.split("\n");

      // Get the longer length between current and new text for each line
      const maxLengths = lines.map((line, i) => {
        const currentLine = displayLines[i] || [];
        return Math.max(currentLine.length, line.length);
      });

      // Pad each line with spaces to match the longer length
      const paddedLines = lines.map((line, i) => {
        const maxLength = maxLengths[i];
        return line
          .padStart(Math.ceil((maxLength + line.length) / 2), " ")
          .padEnd(maxLength, " ");
      });

      setTargetLines(paddedLines.map((line) => line.split("")));

      // Create array of indices for random ordering for each line
      const lineIndices = paddedLines.map((line) => {
        const indices = Array.from({ length: line.length }, (_, i) => i);
        // Shuffle indices
        for (let i = indices.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        return indices;
      });

      // Update letters one by one in random order for each line
      lineIndices.forEach((indices, lineIndex) => {
        indices.forEach((index, i) => {
          setTimeout(() => {
            setDisplayLines((prev) => {
              const newLines = [...prev];
              // Ensure the array of lines is long enough
              while (newLines.length <= lineIndex) {
                newLines.push([]);
              }
              // Ensure the current line array is long enough
              while (newLines[lineIndex].length <= index) {
                newLines[lineIndex].push(" ");
              }
              newLines[lineIndex][index] = paddedLines[lineIndex][index];
              return newLines;
            });
          }, lineIndex * 300 + i * 20); // Reduced from 1000ms to 300ms between lines, and 50ms to 20ms between letters
        });
      });
    }
  }, [sectionName]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-1 knewave-regular">
      <div className="text-center z-1">
        {displayLines.map((line, lineIndex) => (
          <div
            key={lineIndex}
            className="whitespace-nowrap text-[40px] md:text-[80px] font-bold text-[#e7e5d0]"
          >
            {line.map((letter, index) => (
              <span
                key={`${lineIndex}-${index}`}
                className="inline-block transition-all duration-300"
              >
                {letter}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionName;
