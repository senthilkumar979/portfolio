import { aboutFocus } from "@/content/about";

export const AboutFocus = () => (
  <section className="mt-20 md:mt-28">
    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
      Focus
    </p>
    <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
      What I care about
    </h2>
    <ol className="mt-10 grid gap-0 border-t border-border sm:grid-cols-2">
      {aboutFocus.map((item, index) => (
        <li
          key={item.label}
          className="border-b border-border py-8 sm:px-6 sm:odd:pl-0 sm:even:pr-0 lg:py-10"
        >
          <span className="flex items-baseline gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-accent">
            <span className="tabular-nums text-foreground-muted/70">
              {String(index + 1).padStart(2, "0")}
            </span>
            {item.label}
          </span>
          <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
            {item.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-foreground-muted">
            {item.body}
          </p>
        </li>
      ))}
    </ol>
  </section>
);
