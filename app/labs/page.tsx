"use client";
import React, { useState } from "react";
import { labs } from "@/constants";
import Image from "next/image";
import Drawer from "@/components/base/drawer";

const placeholderImg =
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80";

type LabType = (typeof labs)[0];

const Labs = () => {
  const [open, setOpen] = useState(false);
  const [selectedLab, setSelectedLab] = useState<LabType | null>(null);

  const handleCardClick = (lab: LabType) => {
    setSelectedLab(lab);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedLab(null);
  };

  return (
    <div className="w-full min-h-screen px-4 py-8 flex flex-col items-center bg-[#18191A]">
      <div className="w-full max-w-5xl flex flex-col gap-12">
        {labs.map((lab: LabType, idx: number) => (
          <div
            key={lab.name}
            className={`w-full flex flex-col items-center md:flex-row ${
              idx % 2 === 0
                ? "md:justify-start md:pl-0 md:pr-[30%]"
                : "md:justify-end md:pl-[30%] md:pr-0"
            }`}
          >
            <div className="w-full md:w-[70%]">
              <button
                className="w-full text-left focus:outline-none"
                onClick={() => handleCardClick(lab)}
                aria-label={`Open details for ${lab.name}`}
              >
                <div className="bg-[#232325] rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.02] transition-transform duration-200 border border-[#232325]/60">
                  <div className="relative w-full h-48 md:h-64">
                    <Image
                      src={
                        lab.referenceImages && lab.referenceImages.length > 0
                          ? lab.referenceImages[0]
                          : lab.backgroundImage
                          ? lab.backgroundImage
                          : placeholderImg
                      }
                      alt={lab.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={false}
                    />
                  </div>
                  <div className="flex flex-col justify-between p-4">
                    <h2 className="text-lg font-bold text-white mb-1 leading-tight">
                      {lab.name}
                    </h2>
                    <p className="text-xs text-gray-400 mb-2">{lab.year}</p>
                    <p className="text-gray-300 text-sm line-clamp-3">
                      {lab.about}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Drawer open={open} onClose={handleClose}>
        {selectedLab && (
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
              {selectedLab.name}
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span>Year: {selectedLab.year}</span>
              <span>Duration: {selectedLab.duration}</span>
              <span>Role: {selectedLab.role}</span>
            </div>
            <div className="mt-2">
              <span className="text-gray-400 font-semibold">About:</span>
              <div className="text-gray-300">{selectedLab.about}</div>
            </div>
            <div>
              <span className="text-gray-400 font-semibold">Vision:</span>
              <div className="text-gray-300">{selectedLab.vision}</div>
            </div>
            <div>
              <span className="text-gray-400 font-semibold">Stack:</span>
              <div className="text-gray-300">
                {Array.isArray(selectedLab.stack)
                  ? selectedLab.stack.join(", ")
                  : selectedLab.stack}
              </div>
            </div>
            {selectedLab.highlights && selectedLab.highlights.length > 0 && (
              <div>
                <span className="text-gray-400 font-semibold">Highlights:</span>
                <ul className="text-gray-300 list-disc ml-5">
                  {selectedLab.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            )}
            {selectedLab.impact && (
              <div>
                <span className="text-gray-400 font-semibold">Impact:</span>
                <div className="text-gray-300">{selectedLab.impact}</div>
              </div>
            )}
            {selectedLab.lesson && (
              <div>
                <span className="text-gray-400 font-semibold">Lesson:</span>
                <div className="text-gray-300">{selectedLab.lesson}</div>
              </div>
            )}
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default Labs;
