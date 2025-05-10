import React, { useEffect, useRef } from "react";

const ChatWindow: React.FC = () => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 visible bg-black/40`}
      style={{ pointerEvents: "auto" }}
    >
      <div
        className={`transition-all duration-300 transform bg-neutral-900 text-white rounded-2xl shadow-2xl border border-white/10 w-full max-w-md p-6 scale-100 opacity-100`}
        style={{ pointerEvents: "auto" }}
      ></div>
    </div>
  );
};

export default ChatWindow;
