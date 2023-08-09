import { AllPagesConfig } from "types"

export const allPagesConfig: AllPagesConfig = {
  mainNav: [
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Technologies",
      href: "/technologies",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
  sidebarNav: [
    {
      title: "List of projects",
      items: [
        {
          title: "Chat application",
          href: "/projects/chat-app",
        },
        {
          title: "Quantified self",
          href: "/projects/quant-self-analysis",
        },
        {
          title: "Exercise database",
          href: "/projects/reprex-exercise-database",
        },
        {
          title: "Music player",
          href: "/projects/aria-music-player",
        },
        {
          title: "Survey data dashboard",
          href: "/projects/survey-data",
        },
        {
          title: "Interactive data dashboard",
          href: "/projects/school-dashboard",
        },
        {
          title: "NoC concept redesign",
          href: "/projects/night-of-chances",
        },
        {
          title: "Netflix clone",
          href: "/projects/netflix-clone",
        },
        {
          title: "Restaurant concept design",
          href: "/projects/roxor",
        },
        {
          title: "Hotel concept design",
          href: "/projects/hotel-nivy",
        },
        {
          title: "Web scraper",
          href: "/projects/web-scraper",
        },
        {
          title: "Document chatbot",
          href: "/projects/interactive-document-chatbot",
        },
      ],
    },
    {
      title: "Blog posts",
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
