"use client"

import * as React from "react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { LogoImage } from "@/assets/images"

export function TeamSwitcher() {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-default hover:bg-transparent "
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
              <Image src={LogoImage} className="rounded-lg" alt="logo" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                Admin
              </span>
              <span className="truncate font-normal text-xs">
                Trang quản trị
              </span>
            </div>
          </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
