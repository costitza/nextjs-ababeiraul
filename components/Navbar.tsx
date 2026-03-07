"use client"

import React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-6 bg-transparent">
      <div className="flex items-center gap-8 bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl">
        <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          home
        </Link>
        <Link href="#about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          about
        </Link>
        <Link href="#projects" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          projects
        </Link>
        <Link href="#skills" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          skills
        </Link>
        <div className="relative group">
          <button className="flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors group">
            contact
            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
          </button>
          
          <div className="absolute top-full right-0 mt-2 w-48 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <a 
              href="https://github.com/costitza" 
              target="_blank" 
              className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              Github
            </a>
            <a 
              href="https://www.linkedin.com/in/raul-ababei-28221838b/" 
              target="_blank" 
              className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/frosty.king_67/" 
              target="_blank" 
              className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
