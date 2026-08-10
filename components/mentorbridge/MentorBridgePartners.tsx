import { mentorbridgePartners } from "@/content/mentorbridge";

export const MentorBridgePartners = () => (
  <section className="mt-20 md:mt-28">
    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
      Partners
    </p>
    <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
      Academic and hiring partners
    </h2>
    <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-muted">
      Campuses that collaborate on craft, and companies that hire graduates who
      are already production-minded.
    </p>

    <ul className="mt-10 grid gap-0 border-t border-border sm:grid-cols-3">
      {mentorbridgePartners.map((partner) => (
        <li
          key={partner.name}
          className="border-b border-border py-8 sm:border-b-0 sm:border-r sm:px-6 sm:py-10 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
        >
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent">
            {partner.kind}
          </p>
          <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
            {partner.name}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-foreground-muted">
            {partner.body}
          </p>
        </li>
      ))}
    </ul>
  </section>
);
