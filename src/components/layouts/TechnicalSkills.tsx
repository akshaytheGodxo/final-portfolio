"use client";
import { EvervaultCard, Icon } from "../ui/evervault-card";
export default function TechnicalSkills() {
  return (
    <section className="mt-40">
      <div className="">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-24 mt-24 text-white">Technical <span className="text-primary">Skills</span></h2>
        </div>
        <div className="gap-0 flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <EvervaultCardLayout text="Full-stack React framework for blazing fast apps" centerIcon="/skills/nextjs-word.png" level="Expert" />
            <EvervaultCardLayout text="Strongly-typed JavaScript for safer, scalable code" centerIcon="/typescript-design-assets/ts-logo-round-256.png" level="Advanced" />
            <EvervaultCardLayout text="Open-source Firebase alternative with SQL power" centerIcon="/brand-assets/supabase-logo-wordmark--dark.png" level="Intermediate" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
            <EvervaultCardLayout text="Headless CMS with a developer-first workflow" centerIcon="/skills/payload.svg" level="Beginner" />
            <EvervaultCardLayout text="End-to-end type-safe APIs with zero boilerplate" centerIcon="/skills/trpc-dark.svg" level="Advanced" />
            <EvervaultCardLayout text="Utility-first styling for rapid UI development" centerIcon="/skills/tailwindcss-logotype-white.svg" level="Advanced" />
          </div>

        </div>
      </div>
    </section>
  )

}



export function EvervaultCardLayout({ text, level, centerIcon }: { text?: string, level?: string, centerIcon?: string }) {
  return (
    <div className="relative flex flex-col items-start p-6 rounded-xl border border-white/20 bg-black/40 backdrop-blur-md min-h-[280px]">

      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text={centerIcon} className="w-full h-32 flex justify-center items-center"  />
      <h3 className="mt-6 text-lg font-semibold text-white">{text}</h3>
      <p className="mt-2 text-sm text-white/70">Level: {level}</p>

    </div>
  );
}
