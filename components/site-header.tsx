import Link from "next/link"

import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"

import { SomeIcons } from "./some-icons"

export function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <MobileNav />
        <Link href="/" className="items-center md:hidden">
          <SomeIcons.logo />
        </Link>
        <div className="flex items-center md:w-full md:justify-between md:space-x-2">
          <nav>
            <MainNav />
          </nav>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
