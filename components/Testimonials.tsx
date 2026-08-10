import {
  getTestimonials,
  testimonialsPage,
  type TestimonialSurface,
} from "@/content/testimonials";

interface TestimonialsProps {
  surface: TestimonialSurface;
  experienceSlug?: string;
}

export const Testimonials = ({
  surface,
  experienceSlug,
}: TestimonialsProps) => {
  const items = getTestimonials(surface, experienceSlug);
  if (items.length === 0) return null;

  return (
    <section className="mt-20 md:mt-28">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
        {testimonialsPage.eyebrow}
      </p>
      <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {testimonialsPage.title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-muted">
        {testimonialsPage.description}
      </p>

      <ul className="mt-10 border-t border-border">
        {items.map((item) => (
          <li
            key={`${item.name}-${item.meta}`}
            className="border-b border-border py-8"
          >
            <blockquote className="max-w-3xl text-lg leading-relaxed text-foreground sm:text-xl">
              “{item.quote}”
            </blockquote>
            <footer className="mt-5">
              <p className="text-sm font-semibold tracking-tight text-foreground">
                {item.name}
              </p>
              <p className="mt-1 text-sm text-foreground-muted">{item.role}</p>
              <p className="mt-2 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-foreground-muted/80">
                {item.meta}
              </p>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  );
};
