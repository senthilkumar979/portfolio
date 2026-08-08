import Image from "next/image";

export interface ProjectScreenshot {
  src: string;
  alt: string;
}

interface ProjectGalleryProps {
  title?: string;
  screenshots: ProjectScreenshot[];
}

export const ProjectGallery = ({
  title = "Product",
  screenshots,
}: ProjectGalleryProps) => {
  if (screenshots.length === 0) return null;

  return (
    <section className="mt-12 border-t border-border pt-12">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
        Screenshots
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
        {title} in the wild
      </h2>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {screenshots.map((shot) => (
          <li
            key={shot.src}
            className="overflow-hidden rounded-md ring-1 ring-border"
          >
            <div className="relative aspect-[16/10] bg-background-elevated">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
            <p className="border-t border-border px-4 py-3 text-sm text-foreground-muted">
              {shot.alt}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
