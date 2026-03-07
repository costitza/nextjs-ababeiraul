import React from "react"
import { notFound } from "next/navigation"
import projectsData from "@/data/projects.json"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface ProjectContent {
  heading: string
  text?: string
  subtext?: string
  list?: string[]
  code?: string
  additional_code?: string
  links?: { label: string; url: string }[]
}

interface Project {
  title: string
  category: string
  description: string
  link: string
  image?: string | null
  content: ProjectContent[]
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.link,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = (projectsData as Project[]).find((p) => p.link === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col items-center pt-24 pb-16 px-6">
      <div className="w-full max-w-3xl">
        <Link 
          href="/#projects" 
          className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-10 text-xs font-bold uppercase tracking-widest group"
        >
          <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
          back to projects
        </Link>

        <div className="mb-12">
          <Badge className="mb-3 bg-white/5 text-zinc-400 border border-white/10 rounded-sm px-2 py-0.5 text-[10px] uppercase tracking-tighter font-bold">
            {project.category}
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            {project.title}
          </h1>
          <p className="text-base text-zinc-500 leading-relaxed max-w-2xl">
            {project.description}
          </p>

          {project.image && (
            <div className="relative w-full aspect-[21/9] mt-8 rounded-lg overflow-hidden border border-white/5 grayscale-[0.2] hover:grayscale-0 transition-all duration-500">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover opacity-80"
              />
            </div>
          )}
        </div>

        <div className="space-y-12">
          {project.content.map((section, index) => (
            <section key={index} className="border-t border-white/5 pt-8 first:border-0 first:pt-0">
              <h2 className="text-[11px] font-black text-white/30 mb-6 uppercase tracking-[0.2em]">
                {section.heading}
              </h2>
              
              <div className="space-y-4 max-w-2xl">
                {section.text && (
                  <p className="text-zinc-400 text-[15px] leading-relaxed">
                    {section.text}
                  </p>
                )}

                {section.list && (
                  <ul className="space-y-3">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex gap-3 text-zinc-400 text-[14px] leading-relaxed">
                        <span className="text-white/20 mt-1.5">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.subtext && (
                  <p className="text-zinc-500 text-[14px] leading-relaxed italic border-l-2 border-white/5 pl-4 py-1">
                    {section.subtext}
                  </p>
                )}

                {section.code && (
                  <div className="mt-6">
                    <pre className="p-4 rounded-md bg-white/[0.02] border border-white/5 overflow-x-auto text-[13px] text-zinc-400 font-mono leading-relaxed scrollbar-hide">
                      <code>{section.code}</code>
                    </pre>
                  </div>
                )}

                {section.additional_code && (
                  <div className="mt-2">
                    <pre className="p-4 rounded-md bg-white/[0.02] border border-white/5 overflow-x-auto text-[13px] text-zinc-400 font-mono leading-relaxed scrollbar-hide">
                      <code>{section.additional_code}</code>
                    </pre>
                  </div>
                )}

                {section.links && (
                  <div className="flex flex-wrap gap-3 pt-4">
                    {section.links.map((link, i) => (
                      <Button key={i} asChild variant="outline" className="h-8 bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-sm px-4 text-xs font-bold uppercase tracking-wider">
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          {link.label}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
