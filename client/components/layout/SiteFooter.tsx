const SiteFooter = () => {
  return (
    <footer className="border-t border-border/60 bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between lg:px-10">
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="text-base font-semibold text-foreground">VibeCall AI</p>
          <p>
            Human-grade phone conversations powered by real-time AI voice, tuned for customer delight.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <a href="#why" className="transition hover:text-foreground">
            Why VibeCall AI
          </a>
          <a href="#pricing" className="transition hover:text-foreground">
            Pricing
          </a>
          <a href="#contact" className="transition hover:text-foreground">
            Contact
          </a>
        </div>
        <p className="text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} VibeCall AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
