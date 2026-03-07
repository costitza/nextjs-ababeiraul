import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  title: string
  category: string
  description: string
  link: string
  image?: string | null
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link 
      href={`/projects/${project.link}`}
      className="group block h-full"
    >
      <Card className="h-full bg-white/[0.02] border-white/5 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col rounded-md">
        {project.image && (
          <div className="relative w-full h-40 overflow-hidden">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale-[0.5] group-hover:grayscale-0"
            />
          </div>
        )}
        <div className="p-5 flex flex-col grow">
          <div className="mb-3">
            <Badge variant="secondary" className="bg-white/5 text-zinc-500 border-none font-bold text-[9px] uppercase tracking-tighter px-1.5 py-0 rounded-sm group-hover:text-zinc-300 transition-colors">
              {project.category}
            </Badge>
          </div>
          <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-zinc-200 transition-colors">
            {project.title}
          </h4>
          <p className="text-zinc-500 text-[13px] leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </Card>
    </Link>
  )
}

export default ProjectCard
