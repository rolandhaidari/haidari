"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import { SomeIcons } from "./some-icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <SomeIcons.logo />
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/projects"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/projects")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Projects
        </Link>
        <Link
          href="/technologies"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/technologies")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Technologies
        </Link>
        <Link
          href="/blog"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/blog")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Blog
        </Link>
      </nav>
    </div>
  )
}
