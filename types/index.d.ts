import { User } from "@prisma/client"
import type { Icon } from "@radix-ui"

import { SomeIcons } from "@/components/some-icons"

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof SomeIcons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    linkedin: string
  }
}

export type BlogConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}
export type AllPagesConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type HomePageConfig = {
  mainNav: MainNavItem[]
}
