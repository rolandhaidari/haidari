import Link from "next/link"
import { Blogpost } from "contentlayer/generated"

import { blogConfig } from "@/config/blog"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SomeIcons } from "@/components/some-icons"

interface BlogPagerProps {
  blogpost: Blogpost
}

export function DocsPager({ blogpost }: BlogPagerProps) {
  const pager = getPagerForDoc(blogpost)

  if (!pager) {
    return null
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev && (
        <Link
          href={pager.prev.href}
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <SomeIcons.chevronLeft className="mr-2 h-4 w-4" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "ghost" }), "ml-auto")}
        >
          {pager.next.title}
          <SomeIcons.chevronRight className="ml-2 h-4 w-4" />
        </Link>
      )}
    </div>
  )
}

export function getPagerForDoc(blogpost: Blogpost) {
  const flattenedLinks = [null, ...flatten(blogConfig.sidebarNav), null]
  const activeIndex = flattenedLinks.findIndex(
    (link) => blogpost.slug === link?.href
  )
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null
  return {
    prev,
    next,
  }
}

export function flatten(links: { items? }[]) {
  return links.reduce((flat, link) => {
    return flat.concat(link.items ? flatten(link.items) : link)
  }, [])
}
