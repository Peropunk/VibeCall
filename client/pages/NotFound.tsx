import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6 py-24 lg:px-10">
      <div className="max-w-md space-y-6 rounded-3xl border border-border/70 bg-card/90 p-10 text-center shadow-brand-soft backdrop-blur">
        <p className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-lg font-semibold text-secondary-foreground">
          404
        </p>
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            We couldn’t find that page
          </h1>
          <p className="text-sm text-muted-foreground">
            The link you followed may be broken or the page may have been removed. Let’s take you back home.
          </p>
        </div>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition hover:shadow-brand"
        >
          Return to homepage
        </a>
      </div>
    </section>
  );
};

export default NotFound;
