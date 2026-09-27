import Link from "next/link";
import { ToolsMarquee } from "@/components/about/ToolsMarquee";
import { aboutToolkit } from "@/content/about";

export const AboutToolkit = () => (
  <section className="mt-20 md:mt-28">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
          {aboutToolkit.eyebrow}
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {aboutToolkit.title}
        </h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground-muted">
          {aboutToolkit.body}
        </p>
      </div>
      <Link
        href={aboutToolkit.href}
        className="shrink-0 text-sm font-medium text-accent transition-opacity hover:opacity-80"
      >
        Full toolkit →
      </Link>
    </div>

    <ToolsMarquee />
  </section>
);
