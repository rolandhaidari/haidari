import { Metadata } from "next"

import { PROJECTS } from "@/config/projects"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { env } from "@/env.mjs"
import { ProjectGallery } from "../components/project-gallery"
import { ProjectChallengeSVG, ProjectSolutionSVG } from "../components/svg"
import { absoluteUrl } from "@/lib/utils"

interface ProjectPageProps {
  params: {
    slug: string[]
  }
}

export async function generateMetadata({
  params,
}: {
  params: { projectName: string }
}): Promise<Metadata> {
  const project = PROJECTS.find(
    (project) => project.projectName === params.projectName
  )

  if (!project) {
    return {}
  }

  const url = env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set(
    "heading",
    project.description ?? project.project_title
  )
  ogUrl.searchParams.set("type", "Blog")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: project.project_title,
    description: project.description,
    openGraph: {
      title: project.project_title,
      description: project.description,
      type: "article",
      url: absoluteUrl(project.projectName),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: project.project_title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.project_title,
      description: project.description,
      images: [ogUrl.toString()],
    },
  }
}

export default function SingleProjectPage({
  params,
}: {
  params: { projectName: string }
}) {
  const project = PROJECTS.find(
    (project) => project.projectName === params.projectName
  )

  const PROJECT_IMAGES = project?.images

  return (
    <div className="space-y-20">
      <section className="container flex flex-col">
        <PageHeader className="page-header pb-4">
          <PageHeaderHeading>{project?.project_title}</PageHeaderHeading>
          <PageHeaderDescription>{project?.description}</PageHeaderDescription>
        </PageHeader>

        <div className="flex flex-wrap items-center justify-center gap-4 px-4 align-middle lg:gap-6">
          {project?.tech_stack.map((tech, index) => (
            <Badge key={index}>{tech}</Badge>
          ))}
        </div>
      </section>

      <section className="container flex-1 space-y-4 pb-10 md:pb-12 lg:pb-24">
        {project?.tabs?.length !== undefined && (
          <div className="container  flex max-w-[64rem] flex-col items-center text-center">
            <h2 className="text-center font-heading text-2xl leading-[1.1] md:text-4xl">
              Overview
            </h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
              Challenges & Solutions
            </p>
          </div>
        )}

        <div className="">
          {project?.tabs?.length !== undefined && (
            <Tabs defaultValue={project?.tabs?.[0].value}>
              <div className="flex">
                {project?.tabs?.length !== 1 && (
                  <TabsList className="mx-auto flex flex-wrap">
                    {project?.tabs?.map((tab, index) => (
                      <TabsTrigger key={index} value={tab.value} className="">
                        {tab.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                )}
              </div>

              {project?.tabs?.map((tab, index) => (
                <TabsContent key={index} value={tab.value} className="">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {tab.content.map((item, idx) => (
                      <Card className="col-span-1" key={idx}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                          <CardTitle className="text-md font-medium">
                            {item.type}
                          </CardTitle>
                          {item.type === "Challenge" ? (
                            <ProjectChallengeSVG />
                          ) : (
                            <ProjectSolutionSVG />
                          )}
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>

        <ScrollArea className="h-[600px] w-full rounded-md border">
          <ProjectGallery projectImages={PROJECT_IMAGES} />
        </ScrollArea>
      </section>
    </div>
  )
}
