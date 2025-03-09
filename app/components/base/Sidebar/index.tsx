"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";
import { NavData } from "@/constants/index";
import { NavMain } from "@/components/base/Sidebar/nav-main";
import { NavUser } from "@/components/base/Sidebar/nav-user";
import {
  Sidebar as ComponentSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

const Sidebar = ({ ...props }) => {
  const { toggleSidebar } = useSidebar();
  return (
    <ComponentSidebar
      variant="floating"
      collapsible="icon"
      {...props}
      className="border-0"
    >
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          onClick={() => {
            toggleSidebar();
          }}
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <NavData.teams.logo className="size-4" />
          </div>
          <div className="flex w-full justify-between">
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                {NavData.teams.name}
              </span>
              <span className="truncate text-xs">{NavData.teams.plan}</span>
            </div>
            <div className="flex">
              <ChevronLeft />
            </div>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={NavData.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={NavData.user} />
      </SidebarFooter>
      <SidebarRail />
    </ComponentSidebar>
  );
};

export default Sidebar;
