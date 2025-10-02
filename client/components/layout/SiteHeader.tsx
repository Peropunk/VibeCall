import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Why VibeCall AI", href: "#why" },
  { label: "Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled ? "bg-background/90 shadow-lg shadow-sky-900/5 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-5 lg:px-10">
        <a
          href="/"
          className="group flex items-center gap-3 text-lg font-semibold tracking-tight text-foreground"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F462fdc1538bd468b99eec373dc088499%2F8122e50c71cf4a7c9a31314bb8ff1dd7?format=webp&width=320"
            alt="VibeCall AI logo"
            className="h-12 w-auto sm:h-[73px]"
            loading="lazy"
          />
          <span className="sr-only">VibeCall AI</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative transition-colors hover:text-foreground"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-primary via-primary to-accent px-5 py-2 text-sm font-semibold text-white shadow-brand transition hover:shadow-brand-soft md:inline-flex"
        >
          Get Started Free
        </a>
        <div className="flex md:hidden">
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-brand"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
