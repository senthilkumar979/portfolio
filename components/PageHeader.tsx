interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export const PageHeader = ({
  eyebrow,
  title,
  description,
}: PageHeaderProps) => (
  <header className="mb-12 max-w-3xl">
    {eyebrow ? (
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
    ) : null}
    <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
      {title}
    </h1>
    {description ? (
      <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
        {description}
      </p>
    ) : null}
  </header>
);
