"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
import React from "react";

type VerticalCarouselNavbarProps = {
  url: string;
  options: {
    title: string;
    url: string;
  }[];
};

const VerticalCarouselNavbar = ({
  url,
  options,
}: VerticalCarouselNavbarProps) => {
  const router = useRouter();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      console.log("no api");
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
      console.log("Current selected index:", api.selectedScrollSnap() + 1);
    });
  }, [api]);
  if (options.length === 0) return <></>;
  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      orientation="vertical"
      className="w-full"
    >
      <CarouselContent className="-mt-1 h-[50px] p-0">
        {options.reverse().map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1 flex items-center justify-center">
              <span className="text-xs font-semibold p-1 rounded-lg text-gray-200 cursor-grab">
                {item.title}
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-white" />
    </Carousel>
  );
};

export default VerticalCarouselNavbar;
