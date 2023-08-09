import { createElement } from "react"

import { Avatar } from "@/components/ui/avatar"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SomeCard({ tech }) {
  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_40px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{tech.title}</CardTitle>
          <CardDescription>{tech.desc}</CardDescription>
        </div>
        <div className="flex items-center space-x-1 rounded-md text-secondary-foreground">
          {tech?.icon && (
            <Avatar className="h-10 w-10">
              {createElement(tech.icon, {
                className: "aspect-square h-full w-full",
              })}
            </Avatar>
          )}
        </div>
      </CardHeader>
    </Card>
  )
}
