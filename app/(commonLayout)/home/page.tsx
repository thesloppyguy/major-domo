import { GithubIcon, LinkedinIcon, MailIcon, QrCodeIcon } from "lucide-react";
import Background from "./background";
import QR from "@/assets/QR/QR.png";
import * as motion from "motion/react-client";
import Name from "./background/Name";
import FrostedGlass from "@/components/base/FrostedGlass";
const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

export default function Home() {
  return (
    <>
      <Background>
        <div className="flex flex-col w-full lg:h-full h-[50%] justify-end items-center">
          <div className="flex flex-col lg:flex-row h-[55%] md:h-[80%] w-[80%] rounded-[14px] p-8 lg:gap-16">
            <div className="w-full max-w-[600px] h-full max-h-[320px]">
              <Name />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 2,
              }}
              className="hidden lg:flex flex-row lg:flex-col h-full p-8 gap-6 items-end"
            >
              <FrostedGlass
                color="[#AD8665]"
                className="text-justify lg:text-[18px] p-2"
              >
                {/* <div className="w-[80%] text-black p-4 text-justify rounded-[14px] bg-[#AD8665] lg:text-[22px]"> */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                est cum! Numquam quae modi voluptate maxime, autem ea rerum
                corporis reprehenderit eius esse ab amet veniam eaque rem non.
                Dolore.
                {/* </div> */}
              </FrostedGlass>
              <div className="flex flex-row flex-grow h-full gap-8">
                <div className="flex w-full h-full p-2 gap-8 justify-center max-w-[50px] max-h-[200px]">
                  <div className="flex flex-col h-full w-[48px] rounded-[14px] bg-[#AD8665] justify-around content-center">
                    <div className="w-full h-full flex justify-center items-center cursor-pointer">
                      <GithubIcon />
                    </div>
                    <div className="w-full h-full flex justify-center items-center cursor-pointer">
                      <MailIcon />
                    </div>
                    <div className="w-full h-full flex justify-center items-center cursor-pointer">
                      <LinkedinIcon />
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex w-full h-full gap-8 aspect-square max-h-[200px]">
                  <motion.div className="h-full w-full rounded-[14px] bg-[#AD8665] p-4 aspect-square">
                    <img
                      src={QR.src}
                      alt="QR"
                      className="rounded-[14px] w-full h-full"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 2,
          }}
          className="flex lg:hidden flex-row lg:flex-col py-8 px-4 gap-2 h-[40%]"
        >
          <div className="w-[90%]">
            <FrostedGlass color="[#AD8665]" className="text-justify p-2">
              {/* <div className="w-[80%] items-center text-justify p-2 rounded-[14px]"> */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              est cum! Numquam quae modi voluptate maxime, autem ea rerum
              corporis reprehenderit eius esse ab amet veniam eaque rem non.
              Dolore.
              {/* </div> */}
            </FrostedGlass>
          </div>
          <div className="flex flex-col h-full w-max-[50px] flex-grow rounded-[14px] bg-[#8D9786]">
            <div className="w-full h-full flex justify-center items-center cursor-pointer">
              <GithubIcon />
            </div>
            <div className="w-full h-full flex justify-center items-center cursor-pointer">
              <MailIcon />
            </div>
            <div className="w-full h-full flex justify-center items-center cursor-pointer">
              <LinkedinIcon />
            </div>
            <div className="w-full h-full flex justify-center items-center cursor-pointer">
              <QrCodeIcon />
            </div>
          </div>
        </motion.div>
      </Background>
    </>
  );
}
