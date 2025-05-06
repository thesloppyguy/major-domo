import React, { useEffect, useRef } from "react";

interface ChatWindowProps {
  isOpen: boolean;
  handleToggle: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ isOpen, handleToggle }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        handleToggle();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, handleToggle]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isOpen ? "visible bg-black/40" : "invisible bg-transparent"
      }`}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      <div
        ref={cardRef}
        className={`transition-all duration-300 transform bg-neutral-900 text-white rounded-2xl shadow-2xl border border-white/10 w-full max-w-md p-6 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        style={{ pointerEvents: "auto" }}
      ></div>
    </div>
  );
};

export default ChatWindow;
