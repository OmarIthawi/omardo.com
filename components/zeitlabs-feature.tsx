"use client"

import { ArrowUpRight } from "lucide-react"

const stats = [
  { label: "Since", value: "2014" },
  { label: "Learners Served", value: "Millions" },
]

export function ZeitlabsFeature() {
  return (
    <div
      className="w-full max-w-lg opacity-0 animate-fade-in-up"
      style={{ animationDelay: "900ms" }}
    >
      <a
        href="https://zeitlabs.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(195_80%_55%/0.08)]"
      >
        {/* Shimmer top border */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />

        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
                  Zeitlabs
                </span>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/60 animate-glow-pulse" />
              </div>
              <p className="mt-1 text-lg font-medium text-foreground">
                eLearning Powerhouse in MENA
              </p>
            </div>
            <div className="rounded-full border border-border bg-secondary p-2 text-muted-foreground transition-all duration-300 group-hover:border-primary/30 group-hover:text-primary">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>

          {/* Description */}
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            We build flexible &amp; scalable online learning platforms for
            universities, governments, and non-profits. With full Arabic
            language support, local payment solutions, and compliant hosting in
            Bahrain, Riyadh, and Dubai.
          </p>

          {/* Stats */}
          <div className="mt-5 flex items-center gap-6 border-t border-border pt-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-sm font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Client logos as text */}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="text-[11px] text-muted-foreground/60">Trusted by</span>
            {["Edraak", "Open University", "Pedago"].map((client) => (
              <span
                key={client}
                className="text-[11px] font-medium text-muted-foreground/80"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  )
}
