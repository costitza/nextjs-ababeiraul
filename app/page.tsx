import React from "react"
import ProjectCard from "@/components/ProjectCard"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"
import projects from "@/data/projects.json"

const techSkills = [
...

  "Tailwind", "Node.js", "Flask", ".NET", "Spring Boot", "PostgreSQL", "Git"
]

const softSkills = [
  "💬 Communication", "🧩 Problem Solving", "🤝 Teamwork", "🧠 Critical Thinking", 
  "🎯 Focus & Discipline", "⏰ Time Management", "📚 Continuous Learning", "💡 Creativity"
]

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-5xl px-6 pt-48 pb-24 flex flex-col items-center text-center sm:items-start sm:text-left">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6">
          hi, im <span className="text-zinc-400">Ababei Raul</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-medium text-zinc-400 mb-8">
          welcome to my personal webpage
        </h2>
        <p className="max-w-2xl text-lg text-zinc-500 leading-relaxed">
          Aspiring Full-Stack Web Developer | Building cool things for the web and others | Turning ideas into digital reality
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="w-full max-w-5xl px-6 py-24 border-t border-white/5">
        <h3 className="text-3xl font-bold text-white mb-12">about me</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              I am a first year <a href="https://fmi.unibuc.ro/" className="text-white hover:underline">@unibuc fmi</a> student, majoring in computer science.
            </p>
            <p>
              I am passionate and hardworking, especially trying to learn new skills. I like bouldering and I am motivated to build and achieve my goals.
            </p>
            <p>
              You can find more about me and my background in my <a href="/resume.pdf" target="_blank" className="text-white hover:underline">resume</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-5xl px-6 py-24 border-t border-white/5">
        <h3 className="text-3xl font-bold text-white mb-12">projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full max-w-5xl px-6 py-24 border-t border-white/5">
        <h3 className="text-3xl font-bold text-white mb-12">skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xl font-semibold text-zinc-300 mb-6 uppercase tracking-wider text-sm">tech skills</h4>
            <div className="flex flex-wrap gap-2">
              {techSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-zinc-300 mb-6 uppercase tracking-wider text-sm">soft skills</h4>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="bg-white/5 border-white/10 text-zinc-400 px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-5xl px-6 py-24 border-t border-white/5 mb-24">
        <h3 className="text-3xl font-bold text-white mb-6">contact me</h3>
        <p className="text-zinc-500 text-lg mb-12">
          feel free to contact me at any time and via any method
        </p>
        <div className="flex items-center gap-8">
          <a href="https://github.com/costitza" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/raul-ababei-28221838b/" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/frosty.king_67/" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="mailto:ababeiraul13@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </section>
    </div>
  )
}
