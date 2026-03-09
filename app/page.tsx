"use client"

import React, { useState, useEffect } from "react"
import ProjectCard from "@/components/ProjectCard"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"
import projects from "@/data/projects.json"
import { motion, useMotionValue, useTransform, animate } from "motion/react"

const techSkills = [
  "C++", "Python", "SQL", "JavaScript", "Typescript", "Bash scripting", "C#", "PHP", "Assemblyx86", "RISC-V",
  "Tailwind", "Node.js", "PyTorch", "Flask", ".NET", "Spring Boot", "NextJS", "PostgreSQL", "Git", "ML", "LLMs",
  "Neural network", "Data analysis", "OOP"
]

const softSkills = [
  "Communication", "Problem Solving", "Teamwork", "Critical Thinking", 
  "Focus & Discipline", "Time Management", "Continuous Learning", "Creativity"
]

const TypewriterHeading = () => {
  const text = "hi, im Ababei Raul"
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest))

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1
    })
    return controls.stop
  }, [count, text.length])

  return (
    <div className="inline-grid grid-cols-1 grid-rows-1 items-center mb-6">
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-transparent pb-1 select-none pointer-events-none col-start-1 row-start-1 whitespace-pre" aria-hidden="true">
        {text}
      </h1>
      <div className="flex items-center gap-1 col-start-1 row-start-1">
        <motion.h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white pb-1 whitespace-pre">
          {displayText}
        </motion.h1>
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="w-1.5 h-12 sm:h-16 bg-zinc-400 shrink-0"
        />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-4xl px-6 pt-40 pb-20 flex flex-col items-center text-center sm:items-start sm:text-left">
        <TypewriterHeading />
        <h2 className="text-xl sm:text-3xl font-medium text-zinc-400 mb-8 tracking-[0.15em]">
          welcome to my personal webpage
        </h2>
        <p className="max-w-xl text-base text-zinc-500 leading-relaxed">
          emerging AI/software/web dev | focused on building functional apps | passionate about LLMs and data analysis
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="w-full max-w-4xl px-6 py-20 border-t border-white/5">
        <h3 className="text-sm font-black text-white/40 mb-10 uppercase tracking-[0.3em]">about me</h3>
        <div className="space-y-6 text-zinc-400 text-base leading-relaxed max-w-3xl">
          <p>
            I am a first year <a href="https://fmi.unibuc.ro/" className="text-white hover:underline transition-all">@unibuc fmi</a> student, majoring in computer science.
          </p>
          <p>
            I am passionate and hardworking, especially trying to learn new skills. I also like bouldering and I am motivated to build and achieve my goals.
          </p>
          <p>
            I like AI and ML, understanding the concepts behind and developing functional ideas with them.
          </p>
          <p>
            You can find more about me and my background in my <a href="/resume.pdf" target="_blank" className="text-white hover:underline transition-all underline-offset-4">resume</a>.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-4xl px-6 py-20 border-t border-white/5">
        <h3 className="text-sm font-black text-white/40 mb-10 uppercase tracking-[0.3em]">projects</h3>
        <div className="flex flex-wrap gap-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full max-w-4xl px-6 py-20 border-t border-white/5">
        <h3 className="text-sm font-black text-white/40 mb-10 uppercase tracking-[0.3em]">skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xs font-bold text-zinc-500 mb-6 uppercase tracking-widest">tech skills</h4>
            <div className="flex flex-wrap gap-2">
              {techSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="bg-white/[0.03] border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors px-3 py-1 text-[12px] rounded-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-zinc-500 mb-6 uppercase tracking-widest">soft skills</h4>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="bg-white/[0.03] border-white/5 text-zinc-400 px-3 py-1 text-[12px] rounded-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-4xl px-6 py-20 border-t border-white/5 mb-20">
        <h3 className="text-sm font-black text-white/40 mb-10 uppercase tracking-[0.3em]">contact me</h3>
        <p className="text-zinc-500 text-base mb-10 italic">
          feel free to contact me at any time and via any method
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/costitza" target="_blank" className="text-zinc-500 hover:text-white transition-all transform hover:scale-110">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/raul-ababei-28221838b/" target="_blank" className="text-zinc-500 hover:text-white transition-all transform hover:scale-110">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/frosty.king_67/" target="_blank" className="text-zinc-500 hover:text-white transition-all transform hover:scale-110">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="mailto:ababeiraul13@gmail.com" className="text-zinc-500 hover:text-white transition-all transform hover:scale-110">
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </section>
    </div>
  )
}
