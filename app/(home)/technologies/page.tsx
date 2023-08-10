import { Metadata } from "next"
import { env } from "@/env.mjs"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { SomeCard } from "@/components/some-card"
import { absoluteUrl } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"
import { TECH_STACK_ALL } from "@/config/tech-stack"

export async function generateMetadata(): Promise<Metadata> {
  const url = env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set(
    "heading",
    "Technologies" ?? "A collection of technologies I use in my projects."
  )
  ogUrl.searchParams.set("type", "About")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: "Technologies",
    description: "A collection of technologies I use in my projects.",
    openGraph: {
      title: "Technologies",
      description: "A collection of technologies I use in my projects.",
      type: "article",
      url: absoluteUrl("technologies"),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: "Technologies",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Technologies",
      description: "A collection of technologies I use in my projects.",
      images: [ogUrl.toString()],
    },
  }
}

export default function TechnologiesPage() {
  return (
    <section
      id="all_technologies"
      className="container flex flex-col pb-10 md:pb-12 lg:pb-24"
    >
      <PageHeader className="page-header pb-10">
        <PageHeaderHeading>Technologies</PageHeaderHeading>
        <PageHeaderDescription>
          A collection of languages, frameworks, and tools I use.
        </PageHeaderDescription>
        <div className="w-full">
          <p className="mt-10 w-full text-center font-semibold leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Frequency of use
          </p>

          <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div className="flex flex-col">
              <p className="sm:text-md leading-normal tracking-normal text-muted-foreground sm:leading-7">
                Sometimes
              </p>
              <Progress value={25} />
            </div>
            <div className="flex flex-col">
              <p className="sm:text-md leading-normal tracking-normal text-muted-foreground sm:leading-7">
                Often
              </p>
              <Progress value={50} />
            </div>
            <div className="flex flex-col">
              <p className="sm:text-md leading-normal tracking-normal text-muted-foreground sm:leading-7">
                Very Often
              </p>
              <Progress value={75} />
            </div>
            <div className="flex flex-col">
              <p className="sm:text-md leading-normal tracking-normal text-muted-foreground sm:leading-7">
                (Almost) Always
              </p>
              <Progress value={100} />
            </div>
          </div>
        </div>
      </PageHeader>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2">
        {TECH_STACK_ALL.map((tech) => (
          <SomeCard key={tech.title} tech={tech} homePage={false} />
        ))}
      </div>
    </section>
  )
}
