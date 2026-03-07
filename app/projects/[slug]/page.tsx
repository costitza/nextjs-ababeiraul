import React from "react"
import { notFound } from "next/navigation"
import projectsData from "@/data/projects.json"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
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
    <div className="flex flex-col items-center pt-32 pb-24 px-6">
      <div className="w-full max-w-4xl">
        <Link 
          href="/#projects" 
          className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 text-sm font-medium group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          back to projects
        </Link>

        <div className="mb-16">
          <Badge className="mb-4 bg-white/10 text-zinc-300 border-none font-normal">
            {project.category}
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="space-y-20">
          {project.content.map((section, index) => (
            <section key={index} className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-8 uppercase tracking-widest text-sm opacity-50">
                {section.heading}
              </h2>
              
              <div className="space-y-6">
                {section.text && (
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {section.text}
                  </p>
                )}

                {section.list && (
                  <ul className="space-y-4">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex gap-4 text-zinc-400 text-lg leading-relaxed">
                        <span className="text-white opacity-20 mt-1.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.subtext && (
                  <p className="text-zinc-500 text-lg leading-relaxed italic">
                    {section.subtext}
                  </p>
                )}

                {section.code && (
                  <div className="relative group">
                    <pre className="p-6 rounded-xl bg-white/5 border border-white/10 overflow-x-auto text-sm text-zinc-300 font-mono leading-relaxed">
                      <code>{section.code}</code>
                    </pre>
                  </div>
                )}

                {section.additional_code && (
                  <div className="relative group mt-4">
                    <pre className="p-6 rounded-xl bg-white/5 border border-white/10 overflow-x-auto text-sm text-zinc-300 font-mono leading-relaxed">
                      <code>{section.additional_code}</code>
                    </pre>
                  </div>
                )}

                {section.links && (
                  <div className="flex flex-wrap gap-4 pt-4">
                    {section.links.map((link, i) => (
                      <Button key={i} asChild variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-full px-6">
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          {link.label}
                          <ExternalLink className="w-4 h-4" />
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
