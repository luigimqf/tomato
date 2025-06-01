"use client"

import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { type MenuItem } from "@/types";
import { MENU_ITEMS } from "@/constants";

const MenuItem = ({title,href}: MenuItem) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href={href} scroll={false}>{title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

export const Navigation = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [pathname, searchParams]);

  return (
    <NavigationMenu>
      <NavigationMenuList className="lg:flex hidden">
        {MENU_ITEMS.map((menu) => {
          return (
            <MenuItem key={menu.title} title={menu.title} href={menu.href}/>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}