import { HoverLink } from "@/components/HoverLink";
import { contactElsewhere } from "@/content/contact";

export const ContactElsewhere = () => (
  <section className="mt-20 border-t border-border pt-12 md:mt-28 md:pt-16">
    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
      Elsewhere
    </p>
    <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
      Find me online
    </h2>
    <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
      {contactElsewhere.map((link) => (
        <li key={link.label}>
          <HoverLink
            preview={link.preview}
            className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
          >
            {link.label}
          </HoverLink>
        </li>
      ))}
    </ul>
  </section>
);
