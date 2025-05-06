import React from "react";
import SlideUp from "../base/slideUp";
import Link from "next/link";
const FooterSection = () => {
  return (
    <div className="flex md:justify-between pb-2 px-4 md:flex-row flex-col justify-center text-center">
      <div className="items-center gap-2 text-white md:flex hidden">
        @edition2025 Developed and Designed by Sahil
      </div>
      <div className="flex items-center gap-2 justify-center">
        <SlideUp>
          <Link href="" className="underline text-white">
            Github
          </Link>
        </SlideUp>
        <SlideUp>
          <Link href="" className="underline text-white">
            Linkedin
          </Link>
        </SlideUp>
        <SlideUp>
          <Link href="" className="underline text-white">
            Twitter
          </Link>
        </SlideUp>
        <SlideUp>
          <Link href="" className="underline text-white">
            Instagram
          </Link>
        </SlideUp>
      </div>
      <div className="flex items-center gap-2 text-white md:hidden justify-center mt-2 text-center">
        @edition2025 Developed and Designed by Sahil
      </div>
    </div>
  );
};

export default FooterSection;
