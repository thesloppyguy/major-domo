import React from "react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      {/* Drawer */}
      <div
        className={`fixed bg-[#232325] shadow-2xl transition-transform duration-300 rounded-t-2xl md:rounded-l-2xl md:rounded-t-none w-full md:w-[450px] h-[70vh] md:h-full bottom-0 md:bottom-auto md:top-0 right-0 left-0 md:left-auto z-50 flex flex-col ${
          open
            ? "translate-y-0 md:translate-x-0"
            : "translate-y-full md:translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-6 text-gray-400 hover:text-white text-2xl font-bold z-10"
          onClick={onClose}
          aria-label="Close Drawer"
        >
          &times;
        </button>
        <div className="p-6 overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
