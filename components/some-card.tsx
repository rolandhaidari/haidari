import { createElement } from "react"

import { Avatar } from "@/components/ui/avatar"
import {
  Card,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge"
import { Progress } from "@/components/ui/progress"

export function SomeCard({ tech, homePage }) {
  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_40px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{tech.title}</CardTitle>
          <CardDescription>{tech.desc}</CardDescription>
        </div>
        <div className="flex items-center space-x-1 rounded-md  text-secondary-foreground">
          {tech?.icon && (
            <Avatar className="h-10 w-10">
              {createElement(tech.icon, {
                className: "aspect-square h-full w-full",
              })}
            </Avatar>
          )}
        </div>
      </CardHeader>
      {
        !homePage && (
          <CardFooter>
          {<Progress value={tech?.usage} className="w-[60%]" />}
        </CardFooter>
        )
      }

    </Card>
  )
}
