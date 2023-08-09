"use client"

import Image from "next/image"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Testimonial({
  testimonial,
}: {
  testimonial: {
    name: string
    title: string
    image: string
    quote: string
    text: string
  }
}) {
  return (
    <div className="flex items-center justify-center [&>div]:w-full">
      <Card>
        <CardContent>
          <div className="space-y-8 pt-6">
            <div className="flex items-center">
              <Avatar className="h-16 w-16">
                <AvatarImage src={testimonial.image} alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.title}
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium leading-none">
                {testimonial.quote}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonial.text}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
