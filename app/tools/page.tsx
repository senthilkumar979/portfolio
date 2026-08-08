import type { Metadata } from "next";
import Link from "next/link";
import { ToolIcon } from "@/components/icons/ToolIcon";
import { resolveToolIcon } from "@/components/icons/resolveToolIcon";
import { PageHeader } from "@/components/PageHeader";
import { toolkitCategories, toolkitPage } from "@/content/toolkit";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Preferred technologies and project tooling — categorized by craft, with why each choice earns a place in the stack.",
};

export default function ToolsPage() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_0%_0%,rgba(0,194,168,0.1),transparent_50%),radial-gradient(ellipse_45%_35%_at_100%_20%,rgba(0,194,168,0.06),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <PageHeader
          eyebrow={toolkitPage.eyebrow}
          title={toolkitPage.title}
          description={toolkitPage.description}
        />

        <nav
          aria-label="Tool categories"
          className="mb-16 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-8"
        >
          {toolkitCategories.map((category, index) => (
            <a
              key={category.label}
              href={`#${category.label.toLowerCase()}`}
              className="text-sm text-foreground-muted transition-colors hover:text-accent"
            >
              <span className="tabular-nums text-foreground-muted/60">
                {String(index + 1).padStart(2, "0")}
              </span>{" "}
              {category.label}
            </a>
          ))}
        </nav>

        <div className="space-y-20 md:space-y-28">
          {toolkitCategories.map((category, index) => (
            <section
              key={category.label}
              id={category.label.toLowerCase()}
              className="scroll-mt-28"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                  <p className="flex items-baseline gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-accent">
                    <span className="tabular-nums text-foreground-muted/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {category.label}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {category.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground-muted">
                    {category.description}
                  </p>
                </div>
              </div>

              <ul className="mt-10 border-t border-border">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="group grid gap-3 border-b border-border py-6 transition-colors sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:gap-10 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)]"
                  >
                    <h3 className="flex items-center gap-3 text-base font-medium tracking-tight text-foreground transition-colors group-hover:text-accent">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent ring-1 ring-border">
                        <ToolIcon
                          id={resolveToolIcon(item.name)}
                          className="h-4 w-4"
                        />
                      </span>
                      {item.name}
                    </h3>
                    <p className="text-base leading-relaxed text-foreground-muted sm:pt-1.5">
                      {item.why}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-10 md:mt-28">
          <p className="max-w-xl text-base leading-relaxed text-foreground-muted">
            Want the shorter flagship list? See the home stack — or talk through
            architecture choices for your next platform.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <Link
              href="/#trusted-stack"
              className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
            >
              Home stack →
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
