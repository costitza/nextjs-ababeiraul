import React from "react"
import ProjectCard from "@/components/ProjectCard"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"
import projects from "@/data/projects.json"

const techSkills = [
  "C++", "Python", "SQL", "JavaScript", "C#", "PHP", "Assembly", 
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
      <section className="w-full max-w-4xl px-6 pt-32 pb-16 flex flex-col items-center text-center sm:items-start sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          hi, im <span className="text-zinc-500">Ababei Raul</span>
        </h1>
        <h2 className="text-lg sm:text-xl font-medium text-zinc-400 mb-6 uppercase tracking-widest">
          welcome to my personal webpage
        </h2>
        <p className="max-w-xl text-[15px] text-zinc-500 leading-relaxed">
          Aspiring Full-Stack Web Developer | Building cool things for the web and others | Turning ideas into digital reality
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="w-full max-w-4xl px-6 py-16 border-t border-white/5">
        <h3 className="text-[11px] font-black text-white/30 mb-8 uppercase tracking-[0.2em]">about me</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4 text-zinc-400 text-[15px] leading-relaxed">
            <p>
              I am a first year <a href="https://fmi.unibuc.ro/" className="text-white hover:underline transition-all">@unibuc fmi</a> student, majoring in computer science.
            </p>
            <p>
              I am passionate and hardworking, especially trying to learn new skills. I like bouldering and I am motivated to build and achieve my goals.
            </p>
            <p>
              You can find more about me and my background in my <a href="/resume.pdf" target="_blank" className="text-white hover:underline transition-all underline-offset-4">resume</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-4xl px-6 py-16 border-t border-white/5">
        <h3 className="text-[11px] font-black text-white/30 mb-8 uppercase tracking-[0.2em]">projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full max-w-4xl px-6 py-16 border-t border-white/5">
        <h3 className="text-[11px] font-black text-white/30 mb-8 uppercase tracking-[0.2em]">skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-[10px] font-bold text-zinc-500 mb-6 uppercase tracking-widest">tech skills</h4>
            <div className="flex flex-wrap gap-2">
              {techSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="bg-white/[0.03] border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors px-2 py-0.5 text-[11px] rounded-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-zinc-500 mb-6 uppercase tracking-widest">soft skills</h4>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="bg-white/[0.03] border-white/5 text-zinc-400 px-2 py-0.5 text-[11px] rounded-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-4xl px-6 py-16 border-t border-white/5 mb-16">
        <h3 className="text-[11px] font-black text-white/30 mb-8 uppercase tracking-[0.2em]">contact me</h3>
        <p className="text-zinc-500 text-[14px] mb-8 italic">
          feel free to contact me at any time and via any method
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/costitza" target="_blank" className="text-zinc-500 hover:text-white transition-all transform hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/raul-ababei-28221838b/" target="_blank" className="text-zinc-500 hover:text-white transition-all transform hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/frosty.king_67/" target="_blank" className="text-zinc-500 hover:text-white transition-all transform hover:scale-110">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="mailto:ababeiraul13@gmail.com" className="text-zinc-500 hover:text-white transition-all transform hover:scale-110">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  )
}
