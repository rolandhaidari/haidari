import * as React from "react"
import Image from "next/image"

interface ProjectGalleryProps {
  projectImages: string[] | undefined
}

export function ProjectGallery({ projectImages }: ProjectGalleryProps) {
  return (
    <>
      {projectImages?.map((image) => (
        <div className="h-full w-full" key={image}>
          <div>
            <Image
              src={image}
              alt="Project Chatbot"
              width={1800}
              height={750}
            />
          </div>
        </div>
      ))}
    </>
  )
}
