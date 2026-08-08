import Image from "next/image";
import Link from "next/link";
import { featuredWork } from "@/content/home";

export const SelectedWork = () => (
  <section className="relative border-t border-border">
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_100%_0%,rgba(0,194,168,0.07),transparent_55%)]"
      aria-hidden
    />

    <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
            Selected projects
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Cases that show how I build
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted">
            Product, platform architecture, and a mentorship pipeline — three
            threads from the same craft.
          </p>
        </div>

        <Link
          href="/projects"
          className="shrink-0 text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          All projects →
        </Link>
      </div>

      <ol className="mt-14 border-t border-border">
        {featuredWork.map((item, index) => (
          <li key={item.slug} className="border-b border-border">
            <Link
              href={item.href}
              className="group grid gap-5 py-10 transition-colors md:grid-cols-[5.5rem_minmax(0,1fr)_auto] md:items-start md:gap-10 md:py-12"
            >
              <span className="text-[0.6875rem] font-medium tabular-nums tracking-[0.22em] text-foreground-muted/70">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                    {item.name}
                  </h3>
                  <span className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent">
                    {item.role}
                  </span>
                </div>

                <p className="mt-3 max-w-2xl text-base leading-snug text-foreground sm:text-lg sm:leading-snug">
                  {item.title}
                </p>
                <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-foreground-muted">
                  {item.result}
                </p>
                <p className="mt-5 text-sm text-foreground-muted/80">
                  {item.stack.join(" · ")}
                </p>
              </div>
              <div className="flex items-center gap-2 md:flex-col justify-between min-h-full items-center md:items-end">
                {"logo" in item && item.logo ? (
                  <Image
                    src={item.logo}
                    alt=""
                    width={240}
                    height={80}
                    className={
                      "shrink-0 object-contain " + (item.logoClassName || "")
                    }
                  />
                ) : null}
                <span
                  aria-hidden
                  className="hidden text-accent transition-transform duration-300 group-hover:translate-x-1 md:mt-1 md:inline-flex md:items-center"
                >
                  →
                </span>
                <span className="text-sm font-medium text-accent md:hidden">
                  View case →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
