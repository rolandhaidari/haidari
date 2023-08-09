import Link from "next/link"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <h2
        className="w-full animate-gradient bg-gradient-to-r from-indigo-200 via-red-200
              to-yellow-100 bg-gradient bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent"
      >
        Project Title
      </h2>
      {/* <Badge>NextJS</Badge>
      <Badge>React</Badge>
      <Badge>TypeScript</Badge> */}
      {/* <h2 className="w-full text-center text-3xl font-bold tracking-tight">
        Project Title
      </h2> */}
    </nav>
  )
}
