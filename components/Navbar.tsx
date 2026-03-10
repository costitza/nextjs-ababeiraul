"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsContactOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const navLinks = [
    { name: "home", href: "/", id: "home" },
    { name: "about", href: "/#about", id: "about" },
    { name: "projects", href: "/#projects", id: "projects" },
    { name: "skills", href: "/#skills", id: "skills" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-transparent">
      <div className="flex items-center gap-1 sm:gap-4 bg-black/20 backdrop-blur-md px-2 sm:px-4 py-2 rounded-full border border-white/10 shadow-2xl">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            onClick={() => setActiveSection(link.id)}
            className={cn(
              "text-xs sm:text-sm font-medium px-2.5 sm:px-3 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap",
              activeSection === link.id
                ? "bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            )}
          >
            {link.name}
          </Link>
        ))}
        
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsContactOpen(!isContactOpen)}
            className={cn(
              "flex items-center gap-1 text-xs sm:text-sm font-medium px-2.5 sm:px-3 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap",
              isContactOpen || activeSection === "contact"
                ? "bg-white/10 text-white"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            )}
          >
            contact
            <ChevronDown className={cn("w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200", isContactOpen && "rotate-180")} />
          </button>
          
          <div className={cn(
            "absolute top-full right-0 mt-3 w-40 sm:w-48 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-200 origin-top-right",
            isContactOpen 
              ? "opacity-100 visible scale-100" 
              : "opacity-0 invisible scale-95"
          )}>
            {[
              { label: "Github", href: "https://github.com/costitza" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/raul-ababei-28221838b/" }
            ].map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                target="_blank" 
                onClick={() => {
                  setActiveSection("contact")
                  setIsContactOpen(false)
                }}
                className="block px-5 py-3 text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
