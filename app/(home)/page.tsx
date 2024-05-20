import Link from "next/link"

import { PROJECTS } from "@/config/projects"
import { SERVICES } from "@/config/services"
import { siteConfig } from "@/config/site"
import { TESTIMONIALS } from "@/config/testimonials"
import { buttonVariants } from "@/components/ui/button"
import { Overview } from "@/components/overview"
import { SomeCard } from "@/components/some-card"
import { SomeIcons } from "@/components/some-icons"
import { Testimonial } from "@/components/testimonial"

import { ProjectCard } from "./projects/components/project-card"

const selectedProjects = ["recipe-saas-demo", "superset"]

const TECH_STACK_HOMEPAGE = [
  {
    icon: SomeIcons.react,
    title: "React",
    desc: "Custom hooks, context, state management",
    keywords: ["custom hooks", "context", "state management"],
  },
  {
    icon: SomeIcons.nextjs,
    title: "NextJS",
    desc: "ISR, SSG, REST API, cache",
    keywords: ["ISR", "SSG", "REST API", "cache"],
  },
  {
    icon: SomeIcons.typescript,
    title: "TypeScript",
    desc: "Prop types, interfaces",
    keywords: ["prop types", "interfaces"],
  },
  {
    icon: SomeIcons.tailwind,
    title: "Tailwind",
    desc: "Custom configs, tailwind plugins",
    keywords: ["custom configs", "plugins"],
  },
]

const filteredProjects = PROJECTS.filter((project) =>
  selectedProjects.includes(project.projectName)
)

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.linkedin}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Open to new opportunities
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Roland Haidari
          </h1>

          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Using modern technologies to create cutting-edge <strong>cloud</strong> architectures and <strong>data</strong> solutions.
            With a long history of building complex applications and services, 
            I have a passion for many different areas of software technologies. Explore ↓
          </p>
        </div>
      </section>
      <section
        className="container space-y-6 py-8 md:py-12 lg:py-24"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Selected projects
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            I have built various projects. Over the years I explored different tech
            stacks and areas. Here are some of my favorites.
          </p>
        </div>
        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.projectName} project={project} />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Link className={buttonVariants()} href="/projects">
            See all projects
          </Link>
        </div>
      </section>
      <section
        id="technologies"
        className="container space-y-6 py-8 md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            What I work with
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            I have experience with a wide range of technologies. Here are some
            of my favorites.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2">
          {TECH_STACK_HOMEPAGE.map((tech) => (
            <SomeCard key={tech.title} tech={tech} homePage={true} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link className={buttonVariants()} href="/technologies">
            Find out more
          </Link>
        </div>
      </section>
      <section
        className="container space-y-6 py-8 md:py-12 lg:py-24"
        id="services"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Services
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Here are some of the fields I have experience in. I&apos;m always open to new
            opportunities, so feel free to reach out.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:flex-row">
          {SERVICES.map((service, index) => (
            <Overview key={index} service={service} />
          ))}
        </div>
      </section>
      <section
        className="container space-y-6 py-8 md:py-12 lg:py-24"
        id="testimonials"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Testimonials
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Here&apos;s what some people have said about me and my work.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {TESTIMONIALS.map((testimonial) => (
            <Testimonial key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </>
  )
}
