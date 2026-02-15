"use client"

import { Award, Rocket } from "lucide-react"

const highlights = [
  {
    icon: Rocket,
    title: "Founder & CEO at Zeitlabs",
    description:
      "Founded Zeitlabs eLearning Solutions, the Open edX powerhouse in MENA, delivering scalable learning platforms for universities, governments, and non-profits.",
  },
  {
    icon: Award,
    title: "Open edX TOC Board Member",
    description:
      "Member of the Open edX Technical Oversight Committee, shaping the future of open-source education technology.",
  },
]

export function Highlights() {
  return (
    <div className="grid w-full max-w-lg grid-cols-1 gap-3">
      {highlights.map((item, index) => (
        <div
          key={item.title}
          className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 opacity-0 animate-fade-in-up transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_hsl(195_80%_55%/0.06)]"
          style={{ animationDelay: `${400 + index * 120}ms` }}
        >
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative">
            <div className="mb-3 inline-flex rounded-lg border border-border bg-secondary p-2 text-primary transition-colors duration-300 group-hover:border-primary/20">
              <item.icon className="h-4 w-4" />
            </div>
            <h3 className="text-sm font-medium text-foreground">
              {item.title}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
