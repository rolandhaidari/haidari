import { Metadata } from "next"
import Link from "next/link"
import { env } from "@/env.mjs"
import { buttonVariants } from "@/components/ui/button"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { SomeCard } from "@/components/some-card"
import { absoluteUrl } from "@/lib/utils"
import { SomeIcons } from "@/components/some-icons"

export async function generateMetadata(): Promise<Metadata> {
  const url = env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", "Technologies")
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

const TECH_STACK_ALL = [
  {
    icon: SomeIcons.react,
    title: "React",
    desc: "Custom hooks, context, state management",
  },
  {
    icon: SomeIcons.nextjs,
    title: "NextJS",
    desc: "ISR, SSG, REST API, cache",
  },
  {
    icon: SomeIcons.typescript,
    title: "TypeScript",
    desc: "Prop types, interfaces",
  },
  {
    icon: SomeIcons.tailwind,
    title: "Tailwind",
    desc: "Custom configs, tailwind plugins",
  },
  {
    icon: SomeIcons.supabase,
    title: "Supabase",
    desc: "Postgres, auth, storage",
  },
  {
    icon: SomeIcons.numpy,
    title: "Numpy",
    desc: "Array manipulation",
  },
  {
    icon: SomeIcons.pandas,
    title: "Pandas",
    desc: "Data manipulation, analysis",
  },
  {
    icon: SomeIcons.mongodb,
    title: "MongoDB",
    desc: "CRUD, aggregation",
  },
  {
    icon: SomeIcons.pinecone,
    title: "Pinecone",
    desc: "Similarity search, embeddings",
  },
  {
    icon: SomeIcons.prisma,
    title: "Prisma",
    desc: "ORM, migrations",
  },
  {
    icon: SomeIcons.redux,
    title: "Redux",
    desc: "Redux toolkit",
  },
  {
    icon: SomeIcons.figma,
    title: "Figma",
    desc: "Design, prototyping",
  },
  {
    icon: SomeIcons.openai,
    title: "OpenAI",
    desc: "API, GPT models",
  },
  {
    icon: SomeIcons.streamlit,
    title: "Streamlit",
    desc: "Data apps, dashboards",
  },
  {
    title: "LangChain/LLamaIndex",
    desc: "LLMs, agents, chains, prompting",
  },
  {
    title: "Altair/Seaborn",
    desc: "Interactive heatmaps, scatter plots, distributions",
  },
]

export default function TechnologiesPage() {
  return (
    <section
      id="all_technologies"
      className="container flex flex-col pb-10 md:pb-12 lg:pb-24"
    >
      <PageHeader className="page-header pb-10">
        <PageHeaderHeading>Technologies</PageHeaderHeading>
        <PageHeaderDescription>
          A collection of languages, frameworks, and tools I&apos;ve used.
        </PageHeaderDescription>
      </PageHeader>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2">
        {TECH_STACK_ALL.map((tech) => (
          <SomeCard key={tech.title} tech={tech} />
        ))}
      </div>
      {/* <div className="mt-6 flex justify-center">
        <Link className={buttonVariants()} href="/projects">
          Find out more
        </Link>
      </div> */}
    </section>
  )
}
