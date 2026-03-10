import React from "react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="w-full max-w-5xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-zinc-500 text-sm font-medium">
      <div>
        © 2025 Raul Ababei. All rights reserved.
      </div>
      <div className="flex items-center gap-6 text-sm text-zinc-500">
        <a href="https://github.com/costitza" target="_blank" className="hover:text-white transition-colors">
          Github
        </a>
        <a href="https://www.linkedin.com/in/raul-ababei-28221838b/" target="_blank" className="hover:text-white transition-colors">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}

export default Footer
