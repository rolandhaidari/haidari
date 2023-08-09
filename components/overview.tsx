import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
interface OverviewProps {
  title: string
  id: string
  subtitle: string
  tags: string[]
}

import { SomeIcons } from "./some-icons"

const servicesIcons = {
  react: SomeIcons.react,
  nextjs: SomeIcons.nextjs,
  typescript: SomeIcons.typescript,
  tailwind: SomeIcons.tailwind,
  supabase: SomeIcons.supabase,
  postgresql: SomeIcons.postgresql,
  python: SomeIcons.python,
  pandas: SomeIcons.pandas,
  streamlit: SomeIcons.streamlit,
  numpy: SomeIcons.numpy,
}

export function Overview({ service }: { service: OverviewProps }) {
  return (
    <Card>
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle>{service.title}</CardTitle>
          <CardDescription>{service.subtitle}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-row items-center align-middle">
        <div className="flex w-full flex-wrap justify-between">
          {service.tags.map((tag, index) => {
            const IconComponent = servicesIcons[tag]

            return (
              <Avatar className="aspect-square h-10 w-10" key={index}>
                <IconComponent />
              </Avatar>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
