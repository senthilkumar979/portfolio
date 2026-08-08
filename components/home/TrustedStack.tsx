import Link from "next/link";
import { ToolIcon } from "@/components/icons/ToolIcon";
import { resolveToolIcon } from "@/components/icons/resolveToolIcon";
import { trustedStack } from "@/content/home";

export const TrustedStack = () => (
  <section id="trusted-stack" className="relative border-t border-border">
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_100%_100%,rgba(0,194,168,0.07),transparent_55%)]"
      aria-hidden
    />

    <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
            {trustedStack.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {trustedStack.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted">
            {trustedStack.body}
          </p>
        </div>

        <Link
          href="/tools"
          className="shrink-0 text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          Full toolkit →
        </Link>
      </div>

      <ol className="mt-14 grid gap-x-10 border-t border-border sm:grid-cols-2 lg:grid-cols-3">
        {trustedStack.categories.map((category, index) => (
          <li
            key={category.label}
            className="flex flex-col border-b border-border py-10"
          >
            <span className="flex items-baseline gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-accent">
              <span className="tabular-nums text-foreground-muted/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              {category.label}
            </span>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
              {category.title}
            </h3>

            <ul className="mt-8 flex flex-col border-t border-border">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-border py-3.5 text-[0.95rem] tracking-tight text-foreground last:border-b-0"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent ring-1 ring-border">
                    <ToolIcon
                      id={resolveToolIcon(item)}
                      className="h-4 w-4"
                    />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
