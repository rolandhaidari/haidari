import { notFound } from "next/navigation"
import { allBlogposts } from "contentlayer/generated"

import { getTableOfContents } from "@/lib/toc"
import { DocsPageHeader } from "@/components/docs-page-header"
import { Mdx } from "@/components/mdx-components"
import { DocsPager } from "@/components/pager"
import { BlogTableOfContents } from "@/components/toc"

import "@/styles/mdx.css"
import { Metadata } from "next"

import { env } from "@/env.mjs"
import { absoluteUrl } from "@/lib/utils"

interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams(params) {
  const slug = params.slug?.join("/") || ""
  const blogpost = allBlogposts.find(
    (blogpost) => blogpost.slugAsParams === slug
  )

  if (!blogpost) {
    null
  }

  return blogpost
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const blogpost = await getDocFromParams(params)

  if (!blogpost) {
    return {}
  }

  const url = env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", blogpost.description ?? blogpost.title)
  ogUrl.searchParams.set("type", "Blog")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: blogpost.title,
    description: blogpost.description,
    openGraph: {
      title: blogpost.title,
      description: blogpost.description,
      type: "article",
      url: absoluteUrl(blogpost.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: blogpost.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blogpost.title,
      description: blogpost.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allBlogposts.map((blogpost) => ({
    slug: blogpost.slugAsParams.split("/"),
  }))
}

export default async function DocPage({ params }: DocPageProps) {
  const blogpost = await getDocFromParams(params)

  if (!blogpost) {
    notFound()
  }

  const toc = await getTableOfContents(blogpost.body.raw)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <DocsPageHeader heading={blogpost.title} text={blogpost.description} />
        <Mdx code={blogpost.body.code} />
        <hr className="my-4 md:my-6" />
        <DocsPager blogpost={blogpost} />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <BlogTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  )
}
