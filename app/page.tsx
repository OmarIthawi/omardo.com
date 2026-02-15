import { ProfileCard } from "@/components/profile-card"
import { Highlights } from "@/components/highlights"
import { ZeitlabsFeature } from "@/components/zeitlabs-feature"

export default function Home() {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 py-16 sm:py-24">
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(195 80% 55%) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-[300px] w-[500px] rounded-full opacity-[0.03]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(195 80% 55%) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <section className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-10">
        <ProfileCard />
        <Highlights />
        <ZeitlabsFeature />

        <div
          className="flex items-center gap-2 opacity-0 animate-fade-in pt-4"
          style={{ animationDelay: "1200ms" }}
        >
          <span className="text-sm text-muted-foreground/50">Let&apos;s connect:</span>
          <a
            href="mailto:welcome@zeitlabs.com"
            className="text-sm text-muted-foreground/50 underline transition-colors duration-300 hover:text-primary"
          >
            welcome@zeitlabs.com
          </a>
        </div>
      </section>
    </main>
  )
}
