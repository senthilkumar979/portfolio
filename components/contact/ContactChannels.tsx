import { HoverLink } from "@/components/HoverLink";
import { contactChannels } from "@/content/contact";

export const ContactChannels = () => (
  <section className="mt-20 md:mt-28">
    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
      Channels
    </p>
    <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
      Ways to reach me
    </h2>

    <ul className="mt-10 border-t border-border">
      {contactChannels.map((channel) => {
        const value =
          "preview" in channel ? (
            <HoverLink
              preview={channel.preview}
              className="text-lg font-medium tracking-tight text-foreground transition-colors hover:text-accent"
            >
              {channel.value}
            </HoverLink>
          ) : (
            <a
              href={channel.href}
              className="text-lg font-medium tracking-tight text-foreground transition-colors hover:text-accent"
            >
              {channel.value}
            </a>
          );

        return (
          <li
            key={channel.label}
            className="grid gap-2 border-b border-border py-7 sm:grid-cols-[8rem_minmax(0,1fr)_auto] sm:items-baseline sm:gap-8"
          >
            <span className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-foreground-muted">
              {channel.label}
            </span>
            {value}
            <span className="text-sm text-foreground-muted sm:text-right">
              {channel.hint}
            </span>
          </li>
        );
      })}
    </ul>
  </section>
);
