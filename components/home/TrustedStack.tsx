import Link from "next/link";
import { ToolIcon } from "@/components/icons/ToolIcon";
import { resolveToolIcon } from "@/components/icons/resolveToolIcon";
import { stackHighlight } from "@/content/home";

export const TrustedStack = () => (
  <section className="border-t border-border">
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-foreground-muted">
        Trusted stack
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Flagship tools
      </h2>

      <ul className="mt-12 grid gap-x-8 gap-y-0 border-t border-border sm:grid-cols-2 lg:grid-cols-3">
        {stackHighlight.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 border-b border-border py-5 text-lg tracking-tight text-foreground"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent ring-1 ring-border">
              <ToolIcon id={resolveToolIcon(item)} className="h-4 w-4" />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <Link
        href="/tools"
        className="mt-10 inline-flex text-sm font-medium text-accent transition-opacity hover:opacity-80"
      >
        Full toolkit →
      </Link>
    </div>
  </section>
);
