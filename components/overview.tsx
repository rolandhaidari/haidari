import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface OverviewProps {
  title: string
  id: string
  subtitle: string
  tags: string[]
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
        <div className="flex flex-wrap gap-4">
          {service.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
