import * as React from "react"
import Link from "next/link"
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="mx-auto flex max-w-fit items-center ">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/images/zavodsky_thumb.webp" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-lg font-medium leading-none">Erik Závodský</p>
          <p className="text-md text-muted-foreground">Jack of all trades</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <div>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "h-12 w-12 border px-0"
              )}
            >
              <TwitterLogoIcon className="h-6 w-6 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
        </div>
        <div>
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "h-12 w-12 border px-0"
              )}
            >
              <GitHubLogoIcon className="h-6 w-6 fill-current" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
        </div>
        <div>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "h-12 w-12 border px-0"
              )}
            >
              <LinkedInLogoIcon className="h-6 w-6 fill-current" />
              <span className="sr-only">Linkedin</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by 
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            > Roland Haidari </a>
            based on template by {" "}
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Erik Závodský
            </a>
            . Hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </a>
            . The source code is available on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
