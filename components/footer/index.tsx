import React from "react";
import SlideUp from "../base/slideUp";
import Link from "next/link";
const FooterSection = () => {
  return (
    <div className="flex md:justify-between p-1 md:flex-row flex-col justify-center text-center">
      <div className="flex items-center gap-2 justify-center w-full">
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
    </div>
  );
};

export default FooterSection;
