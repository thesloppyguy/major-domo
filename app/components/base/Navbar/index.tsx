"use client";
import React from "react";

import { motion, useAnimation } from "framer-motion";
import { NavData } from "@/constants/index";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import type { NavItems } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import VerticalCarouselNavbar from "../VerticalCarouselNavbar";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import FrostedGlass from "../FrostedGlass";
import { useRouter, usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  if (!NavData.navMain.length) return <></>;
  return (
    <>
      <div className="p-1 absolute top-0 left-0 right-0 m-auto">
        <FrostedGlass className="flex w-full justify-between" color="[#FBEFE1]">
          {(NavData.navMain as NavItems[]).map((item: NavItems) => (
            <Tooltip key={item.title}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  key={item.title}
                  size="sm"
                  aria-label={item.title}
                  onClick={() => router.push(item.url)}
                  className={`${
                    pathname.includes(item.url)
                      ? "bg-amber-100 text-black hover:bg-amber-100 hover:text-black"
                      : ""
                  }`}
                >
                  {item.icon && <item.icon className="size-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" align="center">
                {item.title}
              </TooltipContent>
            </Tooltip>
          ))}
        </FrostedGlass>
      </div>
      <div className="flex flex-col absolute bottom-0 left-0 right-0 m-auto p-1">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1,
            delay: 10,
            // repeat: Infinity,
          }}
          className="w-full justify-center"
        >
          <VerticalCarouselNavbar
            url={
              (NavData.navMain as NavItems[]).filter((item) =>
                pathname.includes(item.url)
              )[0].url
            }
            options={
              (NavData.navMain as NavItems[]).filter((item) =>
                pathname.includes(item.url)
              )[0].items
            }
          />
        </motion.div>
        <FrostedGlass className="flex w-full justify-between" color="[#FBEFE1]">
          <div className="p-1 block sm:hidden">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="link"
                  size="icon"
                  className="cursor-pointer bg-[#8D9786] rounded-full border-[1px]"
                >
                  <ChevronLeft />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top" align="center">
                Previous
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex w-full gap-2 rounded-lg p-1 cursor-pointer">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground w-full rounded-lg pr-2">
                  <div className="flex w-full justify-between">
                    <div className="flex gap-1">
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage
                          src={NavData.user.avatar}
                          alt={NavData.user.name}
                          className="rounded-lg"
                        />
                        <AvatarFallback className="rounded-lg">
                          SA
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                          {NavData.user.name}
                        </span>
                        <span className="truncate text-xs">
                          {NavData.user.email}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <ChevronsUpDown className="ml-auto size-4" />
                    </div>
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side={"bottom"}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage
                        src={NavData.user.avatar}
                        alt={NavData.user.name}
                      />
                      <AvatarFallback className="rounded-lg">SA</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {NavData.user.name}
                      </span>
                      <span className="truncate text-xs">
                        {NavData.user.email}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <LinkedinIcon />
                    Linkedin
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <GithubIcon />
                    Github
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <TwitterIcon />
                  Twitter
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="p-1 block sm:hidden">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="link"
                  size="icon"
                  className="cursor-pointer bg-[#8D9786] rounded-full border-[1px]"
                >
                  <ChevronRight />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" align="center">
                Next
              </TooltipContent>
            </Tooltip>
          </div>
        </FrostedGlass>
      </div>
    </>
  );
};

export default Navbar;
