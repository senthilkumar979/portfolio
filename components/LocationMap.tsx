import { externalAnchorProps } from "@/lib/links";
import {
  osmBrowseUrl,
  osmEmbedSrc,
  resolveLocation,
  type GeoLocation,
} from "@/content/locations";

interface LocationMapProps {
  location: string | GeoLocation;
  /** Compact card for headers; default is the full card */
  size?: "sm" | "md";
  className?: string;
}

export const LocationMap = ({
  location,
  size = "md",
  className = "",
}: LocationMapProps) => {
  const place =
    typeof location === "string" ? resolveLocation(location) : location;
  if (!place) return null;

  const height = size === "sm" ? "h-36" : "h-44 sm:h-52";
  const width = size === "sm" ? "w-full max-w-[16rem]" : "w-full max-w-sm";

  return (
    <figure className={`${width} ${className}`}>
      <div
        className={`relative overflow-hidden rounded-lg bg-background-elevated ring-1 ring-border ${height}`}
      >
        <iframe
          title={`Map of ${place.label}`}
          src={osmEmbedSrc(place)}
          className="h-full w-full border-0 grayscale-[0.25] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(15,20,25,0.55)_100%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-[120%]">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-accent ring-2 ring-background" />
          </span>
        </div>
      </div>
      <figcaption className="mt-3 flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 text-sm text-foreground">
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 shrink-0 text-accent"
            fill="currentColor"
            aria-hidden
          >
            <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
          </svg>
          {place.label}
        </span>
        <a
          href={osmBrowseUrl(place)}
          {...externalAnchorProps(osmBrowseUrl(place), true)}
          className="text-xs font-medium text-foreground-muted transition-colors hover:text-accent"
        > 
          Open map →
        </a>
      </figcaption>
    </figure>
  );
};

interface LocationLabelProps {
  location: string;
  className?: string;
}

/** Inline location chip with pin — for lists and meta rows */
export const LocationLabel = ({
  location,
  className = "",
}: LocationLabelProps) => (
  <span
    className={`inline-flex items-center gap-1.5 text-sm text-foreground-muted ${className}`}
  >
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0 text-accent"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
    </svg>
    {location}
  </span>
);
