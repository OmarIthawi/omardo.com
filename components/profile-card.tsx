"use client"

import { Github, Linkedin, Building2 } from "lucide-react"

export function ProfileCard() {
  return (
    <div className="flex flex-col items-center gap-6 opacity-0 animate-scale-in">
      {/* Name */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
          Omar Al-Ithawi
        </h1>
        <p className="mt-2 text-base text-muted-foreground font-mono tracking-wide">
          Founder &amp; eLearning Leader
        </p>
      </div>

      {/* Bio */}
      <p className="max-w-md text-center text-sm leading-relaxed text-secondary-foreground">
        eLearning Solutions: flexible scalable online learning
      </p>

      {/* Social Links */}
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/omarithawi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_12px_hsl(195_80%_55%/0.15)]"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a
          href="https://github.com/OmarIthawi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_12px_hsl(195_80%_55%/0.15)]"
        >
          <Github className="h-4 w-4" />
        </a>
        <a
          href="https://zeitlabs.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Zeitlabs website"
          className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_12px_hsl(195_80%_55%/0.15)]"
        >
          <Building2 className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
