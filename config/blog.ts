import { BlogConfig } from "types"

export const blogConfig: BlogConfig = {
  mainNav: [
    {
      title: "Blog",
      href: "/blog",
    },
  ],
  sidebarNav: [
    {
      title: "Random",
      items: [
        {
          title: "GitHub Heatmaps",
          href: "/blog/github",
        },
        {
          title: "OpenAI Functions",
          href: "/blog/openai",
        },
      ],
    },
  ],
}
