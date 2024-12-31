"use client"

import * as React from "react"
import {
  Bell,
  Frame,
  User,
  Users,
  Wallet,
} from "lucide-react"

import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  projects: [
    {
      name: "Dashboard",
      url: "/admin/dashboard",
      icon: Frame,
    },
    {
      name: "Thông báo",
      url: "/admin/notifications",
      icon: Bell,
    },
    {
      name: "Tài chính",
      url: "/admin/finance",
      icon: Wallet,
    },
    {
      name: "Tài khoản",
      url: "/admin/account",
      icon: User,
    },
    {
      name: "Dòng họ",
      url: "/admin/family",
      icon: Users,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
