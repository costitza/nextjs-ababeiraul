import React from "react"
import { notFound } from "next/navigation"
import projectsData from "@/data/projects.json"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import VideoPlayer from "@/components/VideoPlayer"

interface ProjectContent {
  heading: string
  text?: string
  subtext?: string
  list?: string[]
  code?: string
  additional_code?: string
  links?: { label: string; url: string }[]
  image?: string | null
  video?: {
    src: string
    muted?: boolean
    forceMuted?: boolean
    autoPlay?: boolean
    loop?: boolean
    controls?: boolean
  } | null
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

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const { slug } = params
  const project = (projectsData as Project[]).find((p) => p.link === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col items-center pt-32 pb-24 px-6">
      <div className="w-full max-w-3xl">
        <Link 
          href="/#projects" 
          className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 text-xs font-bold uppercase tracking-widest group"
        >
          <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
          back to projects
        </Link>

        <div className="mb-16 text-center flex flex-col items-center">
          <Badge className="mb-4 bg-white/5 text-zinc-400 border border-white/10 rounded-sm px-2 py-0.5 text-[10px] uppercase tracking-tighter font-bold">
            {project.category}
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            {project.title}
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-xl">
            {project.description}
          </p>

          {project.image && (
            <div className="max-w-xl w-full mx-auto rounded-xl overflow-hidden border border-white/5 bg-white/[0.02] mt-12">
              <Image 
                src={project.image} 
                alt={project.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className="opacity-90 transition-all duration-500 block"
                priority
              />
            </div>
          )}
        </div>

        <div className="space-y-16">
          {project.content.map((section, index) => (
            <section key={index} className="border-t border-white/5 pt-12 first:border-0 first:pt-0">
              <h2 className="text-sm font-black text-white/40 mb-10 uppercase tracking-[0.3em] text-center">
                {section.heading}
              </h2>
              
              <div className="space-y-8 max-w-xl mx-auto">
                {section.text && (
                  <p className="text-zinc-400 text-base leading-relaxed text-justify">
                    {section.text}
                  </p>
                )}

                {section.list && (
                  <ul className="space-y-4">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex gap-4 text-zinc-400 text-base leading-relaxed">
                        <span className="text-white/20 mt-1.5">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.subtext && (
                  <p className="text-zinc-500 text-base leading-relaxed italic border-l-2 border-white/5 pl-6 py-1">
                    {section.subtext}
                  </p>
                )}

                {section.image && (
                  <div className="max-w-md w-full mx-auto my-12 rounded-lg overflow-hidden border border-white/5 bg-white/[0.01]">
                    <Image 
                      src={section.image} 
                      alt={section.heading}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      className="opacity-80 block"
                    />
                  </div>
                )}

                {section.video && (
                  <VideoPlayer 
                    src={section.video.src}
                    muted={section.video.muted}
                    forceMuted={section.video.forceMuted}
                    autoPlay={section.video.autoPlay}
                    loop={section.video.loop}
                    controls={section.video.controls}
                  />
                )}

                {section.code && (
                  <div className="mt-10">
                    <pre className="p-6 rounded-md bg-white/[0.02] border border-white/5 overflow-x-auto text-[14px] text-zinc-400 font-mono leading-relaxed scrollbar-hide">
                      <code>{section.code}</code>
                    </pre>
                  </div>
                )}

                {section.additional_code && (
                  <div className="mt-4">
                    <pre className="p-6 rounded-md bg-white/[0.02] border border-white/5 overflow-x-auto text-[14px] text-zinc-400 font-mono leading-relaxed scrollbar-hide">
                      <code>{section.additional_code}</code>
                    </pre>
                  </div>
                )}

                {section.links && (
                  <div className="flex flex-wrap gap-4 pt-8 justify-center">
                    {section.links.map((link, i) => (
                      <Button key={i} asChild variant="outline" className="h-10 bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-sm px-6 text-xs font-bold uppercase tracking-wider">
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          {link.label}
                          {/* @ts-ignore */}
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
