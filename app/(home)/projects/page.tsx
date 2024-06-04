import { Metadata } from "next"

import { PROJECTS } from "@/config/projects"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

import { ProjectCard } from "./components/project-card"

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of the projects I've worked on.",
}

export default function ProjectsPage() {
  return (
    <div className="container flex flex-col pb-10 md:pb-12 lg:pb-24">
      <PageHeader className="page-header pb-10">
        <PageHeaderHeading>Projects</PageHeaderHeading>
        <PageHeaderDescription>
          A collection of the projects I&apos;ve worked on.
        </PageHeaderDescription>
      </PageHeader>

      <div className="flex-1 space-y-4">
        <Tabs defaultValue="all_projects">
          <TabsList className="mx-auto flex flex-wrap">
            <TabsTrigger value="all_projects">All projects</TabsTrigger>
            <TabsTrigger value="cloud">Cloud</TabsTrigger>
            <TabsTrigger value="full_stack">Full-stack</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
          </TabsList>

          <TabsContent value="all_projects">
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.projectName} project={project} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="cloud">
            <div className="grid grid-cols-2 gap-4">
              {PROJECTS.filter((project) =>
                project.area.includes("Cloud")
              ).map((project) => (
                <ProjectCard key={project.projectName} project={project} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="full_stack">
            <div className="grid grid-cols-2 gap-4">
              {PROJECTS.filter((project) =>
                project.area.includes("Full-stack")
              ).map((project) => (
                <ProjectCard key={project.projectName} project={project} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="data">
            <div className="grid grid-cols-2 gap-4">
              {PROJECTS.filter((project) => project.area.includes("Data")).map(
                (project) => (
                  <ProjectCard key={project.projectName} project={project} />
                )
              )}
            </div>
          </TabsContent>
          
        </Tabs>
      </div>
    </div>
  )
}
