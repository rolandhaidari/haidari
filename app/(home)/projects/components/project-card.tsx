import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, CalendarIcon } from "@radix-ui/react-icons"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Project {
  projectName: string
  tech_stack: string[]
  project_title: string
  description: string
  year: string
  area: string
  github?: string
  images: string[]
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg bg-gradient-to-bl from-gray-900 via-gray-600 to-gray-900">
      <div className="h-fit-content m-0.5 rounded-lg bg-card text-card-foreground shadow-sm">
        <CardHeader className="items-start gap-4 space-y-0 md:grid md:grid-cols-[1fr_130px]">
          <div className="space-y-1">
            <CardTitle>{project.project_title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </div>

          <Button variant="secondary" className="px-3 shadow-none">
            <Link
              href={`/projects/${project.projectName}`}
              className="flex items-center"
            >
              <ArrowRightIcon className="mr-2 h-4 w-4" />
              Details
            </Link>
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* <CardContent className="space-y-4 relative h-full w-full"> */}
          <AspectRatio ratio={1.875 / 1}>
            <Image
              src={project.images[0]}
              alt="Photo by Drew Beamer"
              fill
              sizes="(max-width: 1280px) 100vw, 50vw"
              className="rounded-md object-cover"
            />
          </AspectRatio>

          {/* <div className="bg-red-400">
          <Image
            src={project.images[0]}
            alt="Project image"
            fill
            sizes="(max-width: 768px)"
          />
        </div> */}

          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Badge>{project.area}</Badge>
            </div>
            <Badge className="flex items-center">
              <CalendarIcon className="mr-1 h-3 w-3" />
              {project.year}
            </Badge>
          </div>
        </CardContent>
      </div>
    </div>
  )
}
