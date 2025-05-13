import React from "react";
import SlideUp from "../base/slideUp";
import { useRouter } from "next/navigation";
const FooterSection = ({ handleToggle }: { handleToggle: () => void }) => {
  const router = useRouter();
  return (
    <div className="w-full z-50 fixed bottom-0 bg-gradient-to-top from-black/30 to-transparent font-sans hidden md:block">
      <div className="flex p-4 text-center items-center justify-between">
        <div className="text-white flex items-center gap-2">
          <div
            onClick={handleToggle}
            className="text-md font-bold hover:cursor-pointer text-white flex gap-2"
          >
            <SlideUp>ABOUT</SlideUp> | <SlideUp>CONTACT</SlideUp>
          </div>
        </div>
        <div className="text-white flex items-center gap-2">
          <div
            onClick={() => {
              router.push("/labs");
            }}
            className="text-md font-bold hover:cursor-pointer text-white flex gap-2"
          >
            <SlideUp>LABS</SlideUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
