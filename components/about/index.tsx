import React, { useEffect, useRef } from "react";
import SlideUp from "../base/slideUp";
import ChatWindow from "../ChatWindow";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

interface AboutSectionProps {
  isOpen: boolean;
  handleToggle: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  isOpen,
  handleToggle,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed top-0 left-0 w-full h-[80vh] rounded-b-[55px] z-40 border-white border-b-2 border-l-2 border-r-2 knewave-regular"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "250px 250px",
            backgroundColor: "rgb(25, 26, 33)",
          }}
        >
          <div className="container mx-auto flex flex-col items-center justify-center pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold text-[#f74a53]">About Me</h1>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="container mx-auto flex flex-col items-center justify-center p-10"
          >
            <p className="text-white text-xl max-w-2xl text-center">
              Innovative software engineer with a passion for building
              transformational AI products and scalable systems. Experienced in
              leading end-to-end development of AI solutions, from large
              language models to real-time gaming platforms handling 100,000+
              users. Proficient in designing and delivering GenAI apps,
              multimodal parsers, customer analytics, and scalable cloud-native
              applications. Driven by curiosity, ambition, and a relentless
              pursuit of real-world impact.
            </p>
          </motion.div>
          {/* <ChatWindow /> */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            onClick={handleToggle}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-4 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutSection;
