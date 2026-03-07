import React from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  title: string
  category: string
  description: string
  link: string
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link 
      href={`/projects/${project.link}`}
      className="group"
    >
      <Card className="h-full bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden cursor-pointer">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white group-hover:text-zinc-200 transition-colors">
              {project.title}
            </CardTitle>
          </div>
          <Badge variant="secondary" className="bg-white/10 text-zinc-300 border-none font-normal">
            {project.category}
          </Badge>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {project.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}

export default ProjectCard
