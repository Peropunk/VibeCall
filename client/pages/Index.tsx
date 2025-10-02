import { useEffect } from "react";
import { cn } from "@/lib/utils";

const heroHighlights = [
  "Real-time speech-to-text",
  "GPT-class reasoning",
  "Natural multilingual voice",
];

const whyItems = [
  {
    icon: "🚀",
    title: "Instant Setup",
    description: "Launch in minutes with plug-and-play integrations and a guided onboarding flow.",
  },
  {
    icon: "🧠",
    title: "Smart Conversations",
    description: "GPT-driven dialog orchestration keeps every call on-script while sounding human.",
  },
  {
    icon: "🎙️",
    title: "Crystal-Clear Voice",
    description: "Adaptive TTS renders lifelike voices in 40+ languages, tuned for clarity and warmth.",
  },
  {
    icon: "💸",
    title: "Cost-Effective",
    description: "Transparent, usage-based pricing means you only pay for minutes that delight customers.",
  },
  {
    icon: "🌍",
    title: "Scalable",
    description: "From scrappy startups to global enterprises, VibeCall AI flexes to match your call volume.",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "Pay-as-you-go",
    tagline: "Perfect for pilots and side projects.",
    bullets: ["Usage-based billing", "AI voice and STT included", "Self-serve dashboard"],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Custom",
    tagline: "Built for teams and enterprises with compliance needs.",
    bullets: ["Dedicated success partner", "SLA & compliance add-ons", "Private deployments"],
    highlighted: false,
  },
];

const loadTypeform = () => {
  if (document.querySelector('script[src="//embed.typeform.com/next/embed.js"]')) {
    return;
  }
  const script = document.createElement("script");
  script.src = "//embed.typeform.com/next/embed.js";
  script.async = true;
  document.body.appendChild(script);
};

export default function Index() {
  useEffect(() => {
    loadTypeform();
  }, []);

  return (
    <div className="relative pb-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-primary/15 via-transparent to-transparent" />
      <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:pt-24 lg:px-10">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              New • AI voice agents reimagined
            </p>
            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                &ldquo;Vibe coding is outdated. It's time to VibeCall AI.&rdquo;
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Turn every call into a conversation. With real-time speech-to-text, AI reasoning, and lifelike voice, VibeCall AI handles customer interactions seamlessly—so you can focus on scaling your business.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary via-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:shadow-brand-soft"
              >
                Get Started Free
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground/80 transition hover:border-primary/60 hover:text-foreground"
              >
                View Pricing
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              {heroHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 backdrop-blur"
                >
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -left-10 top-6 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-4 -top-10 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative space-y-6 rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-900/90 to-slate-950/70 p-6 text-white shadow-brand">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent/80">
                    Live Call
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">Samantha • VibeCall Agent</h2>
                  <p className="text-sm text-slate-300">
                    Listening, thinking, and responding in real time.
                  </p>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-slate-900/60 px-3 py-1 text-xs font-semibold">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Online
                </div>
              </div>
              <div className="space-y-4 rounded-3xl bg-slate-900/70 p-5 shadow-inner">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Customer</p>
                  <div className="rounded-2xl bg-slate-800/60 p-4 text-sm text-slate-100 shadow-inner">
                    “Hey, I’m curious if you support international shipping to Berlin?”
                  </div>
                </div>
                <div className="space-y-2 text-emerald-100">
                  <p className="text-xs uppercase tracking-wide text-emerald-300/80">VibeCall AI</p>
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm">
                    “Absolutely! We deliver to Berlin in five business days and can book that for you now.”
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  {[
                    { label: "Sentiment", value: "+96" },
                    { label: "Latency", value: "122ms" },
                    { label: "Confidence", value: "High" },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-3 text-center"
                    >
                      <p className="text-[10px] uppercase tracking-wide text-slate-400">
                        {metric.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-900/80 p-4 text-xs text-slate-300">
                <div>
                  <p className="font-semibold text-white">Auto QA Summary</p>
                  <p className="mt-1 text-slate-400">
                    Qualified lead, booked follow-up demo, captured product interest in CRM.
                  </p>
                </div>
                <button className="rounded-full bg-white/10 px-4 py-2 font-semibold text-white transition hover:bg-white/20">
                  Play Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="scroll-mt-28 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-border/70 bg-card/90 shadow-brand-soft backdrop-blur">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 border-b border-border/60 p-10 lg:border-b-0 lg:border-r">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
                Live Demo
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                “Cold calls are annoying. VibeCall AI makes them personal, warm, and human-like.”
              </h2>
              <p className="text-sm text-muted-foreground">
                Watch Samantha, our flagship voice agent, handle a product qualification call end-to-end. Hear how she adapts tone, probes for context, and books meetings with zero human intervention.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Intent detection powered by GPT",
                  "Latency under 200ms with streaming voice",
                  "CRM notes synced automatically",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-[320px]">
              <div className="absolute inset-0">
                <iframe
                  title="VibeCall AI demo"
                  src="https://www.youtube.com/embed/0u0dBZu5dpo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full rounded-t-[32px] border-0 lg:rounded-tr-none lg:rounded-br-[32px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="relative scroll-mt-28 px-6 py-24 lg:px-10">
        <div className="absolute inset-0 -z-10 bg-section-radial" />
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
              Why VibeCall AI
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Your next-gen AI call agent that listens, thinks, and responds—just like a human.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-8 shadow-brand-soft backdrop-blur transition hover:-translate-y-1 hover:shadow-brand"
              >
                <div className="absolute -top-12 right-0 h-24 w-24 rounded-full bg-accent/20 blur-3xl transition group-hover:opacity-80" />
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="mt-5 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-28 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
              Pricing Preview
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Simple, transparent pricing.
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              Choose the plan that fits your team today and scale effortlessly. Every tier includes real-time analytics, secure infrastructure, and ongoing model improvements.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  "relative flex h-full flex-col gap-6 overflow-hidden rounded-[32px] border border-border/70 bg-card/90 p-8 shadow-brand-soft backdrop-blur transition hover:-translate-y-1 hover:shadow-brand",
                  tier.highlighted && "border-primary/60 bg-gradient-to-br from-primary/12 via-card/95 to-accent/10",
                )}
              >
                {tier.highlighted && (
                  <span className="absolute right-6 top-6 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    Most Popular
                  </span>
                )}
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-foreground">{tier.name}</h3>
                  <p className="text-lg font-semibold text-primary">{tier.price}</p>
                  <p className="text-sm text-muted-foreground">{tier.tagline}</p>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {tier.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={cn(
                    "mt-auto inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition",
                    tier.highlighted
                      ? "bg-gradient-to-r from-primary via-primary to-accent text-white shadow-brand"
                      : "border border-border text-foreground hover:border-primary/60",
                  )}
                >
                  Chat with sales
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-3 rounded-[32px] border border-border/60 bg-secondary/40 px-8 py-6 text-center text-sm text-muted-foreground backdrop-blur lg:flex-row lg:text-left">
            <p className="font-medium text-foreground">
              Need tailored compliance, dedicated instances, or premium support?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-transparent px-4 py-2 text-sm font-semibold text-primary transition hover:text-accent"
            >
              Contact Sales for Custom Plans →
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 px-6 pb-10 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[32px] border border-border/70 bg-card/95 p-10 shadow-brand-soft backdrop-blur lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
              Start vibing
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Stop coding your conversations. Start vibing with them. Try VibeCall AI today.
            </h2>
            <p className="text-sm text-muted-foreground">
              Tell us about your use case and we’ll spin up a voice agent that mirrors your best rep. No complex integrations—just a guided launch and a real AI teammate.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/80 px-4 py-3 backdrop-blur">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-base font-semibold text-primary">
                  24/7
                </span>
                Always-on global coverage
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/80 px-4 py-3 backdrop-blur">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-base font-semibold text-accent">
                  SLA
                </span>
                Enterprise-grade reliability
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary via-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:shadow-brand-soft"
            >
              Start Free Trial
            </a>
          </div>
          <div className="relative min-h-[420px] rounded-[28px] border border-border/70 bg-background/80 p-6">
            <div className="absolute inset-0 rounded-[28px] border border-white/40" />
            <div className="relative h-full w-full">
              <div data-tf-live="01K6HZ8NX2T051M293TW90VSNS" className="h-full w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
