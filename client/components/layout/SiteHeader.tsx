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
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-accent text-white shadow-brand">
            <svg
              viewBox="0 0 40 40"
              className="h-5 w-5"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M6.5 12.2C6.5 7.6 10.3 4 14.8 4c2.8 0 5.3 1.3 6.9 3.3l3.5 4.6-4.8 3.8-3.1-4.1c-.5-.7-1.3-1.1-2.3-1.1-1.9 0-3.3 1.5-3.3 3.7v8.2c0 2.2 1.4 3.7 3.3 3.7 1 0 1.8-.4 2.3-1.1l3.1-4.1 4.8 3.8-3.5 4.6c-1.6 2.1-4.1 3.3-6.9 3.3-4.5 0-8.3-3.6-8.3-8.2z"
                fill="currentColor"
              />
              <path
                d="M24.7 7.5c3.6 0 6.6 3 6.6 6.6 0 1-.2 1.9-.6 2.8l3.5 2.3c.8-1.5 1.2-3.3 1.2-5.1 0-6-4.9-10.9-10.9-10.9-1.5 0-3 .3-4.3.9l1.5 4.1c.9-.4 1.9-.7 3-.7"
                fill="currentColor"
                opacity={0.7}
              />
            </svg>
          </span>
          <span className="flex flex-col leading-5">
            <span className="text-base font-semibold">VibeCall AI</span>
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground/80">
              Call agents that feel human
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative transition-colors hover:text-foreground"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover/link:scale-x-100" />
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
