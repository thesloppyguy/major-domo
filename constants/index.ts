"use client"

import { BriefcaseBusiness, File, Home, Library, Paperclip, SquareTerminal } from "lucide-react";

export const NavData = {
  user: {
    name: "Sahil",
    email: "sahilmandal@outlook.com",
    avatar: "/avatars/logo.jpg",
  },
  teams: {
    name: "Sahil",
    logo: SquareTerminal,
    plan: "@SWE",
  },
  navMain: [
    {
      title: "Home",
      url: "/home",
      icon: Home,
      isActive: true,
      items: [],
    },
    {
      title: "Experience",
      url: "/experience",
      icon: BriefcaseBusiness,
      items: [
        // {
        //   title: "Lokibots",
        //   url: "#",
        // },
        // {
        //   title: "Algotrak",
        //   url: "#",
        // },
      ],
    },
    {
      title: "Projects",
      url: "/projects",
      icon: Library,
      items: [
        {
          title: "OneLoki (GEN AI Platform)",
          url: "#oneloki",
        },
        {
          title: "ATS",
          url: "#ats",
        },
        {
          title: "Gen AI Chatbots",
          url: "#chatbots",
        },
        {
          title: "DocYou",
          url: "#docyou",
        },
        {
          title: "StreamWeb",
          url: "#streamweb",
        },
        {
          title: "MediaServer",
          url: "#mediaserver",
        },
      ],
    },
    {
      title: "Blogs",
      url: "/blogs",
      icon: Paperclip,
      items: [
        {
          title: "Techinal",
          url: "#techinal",
        },
        {
          title: "Art & Photos",
          url: "#art",
        },
        {
          title: "Content",
          url: "#content",
        }
      ],
    },
    {
      title: "Resume",
      url: "/home",
      icon: File,
      items: [],
    },
  ],
};