import type { SVGProps } from "react";

export type ToolIconId =
  | "react"
  | "typescript"
  | "nextjs"
  | "mfe"
  | "tanstack"
  | "jotai"
  | "nodejs"
  | "aws"
  | "vitest"
  | "vite"
  | "redux"
  | "tailwind"
  | "dexie"
  | "radix"
  | "zod"
  | "axios"
  | "eslint"
  | "agile"
  | "generic";

interface ToolIconProps extends SVGProps<SVGSVGElement> {
  id: ToolIconId;
}

const base = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true as const,
};

export const ToolIcon = ({ id, className, ...rest }: ToolIconProps) => {
  const props = { ...base, className, ...rest };

  switch (id) {
    case "react":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="2.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.4" transform="rotate(120 12 12)" />
        </svg>
      );
    case "typescript":
      return (
        <svg {...props}>
          <path d="M1.5 1.5h21v21h-21V1.5zm11.4 10.35V9.75H7.35v1.95h2.1v7.8h2.55v-7.8h1.95v-.15zm2.85 5.4c.45.75 1.2 1.35 2.4 1.35 1.05 0 1.8-.45 1.8-1.35 0-.9-.6-1.2-2.1-1.65l-.75-.3c-2.1-.75-3.45-1.8-3.45-3.9 0-2.1 1.65-3.6 4.2-3.6 1.8 0 3.15.6 4.05 2.1l-2.1 1.35c-.45-.75-.9-1.05-1.95-1.05-.9 0-1.5.45-1.5 1.2 0 .75.45 1.05 1.95 1.65l.75.3c2.4.9 3.75 1.95 3.75 4.2 0 2.4-1.8 3.75-4.35 3.75-2.4 0-4.05-1.2-4.8-2.7l2.1-1.35z" />
        </svg>
      );
    case "nextjs":
      return (
        <svg {...props}>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 18.053c-.236.105-.486.053-.64-.132L7.32 7.2v8.4a.6.6 0 01-1.2 0V6.3a.6.6 0 01.9-.52l11.1 11.4c.17.174.17.45-.008.628a.58.58 0 01-.55.245z" />
          <path d="M16.8 6.3a.6.6 0 00-.6.6v8.4l-2.4-2.46V6.9a.6.6 0 00-1.2 0v7.5a.6.6 0 00.99.458L17.4 19.2a.6.6 0 00.9-.458V6.9a.6.6 0 00-.6-.6h-.9z" opacity=".35" />
        </svg>
      );
    case "mfe":
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="3" width="8" height="8" rx="1.5" />
          <rect x="13" y="3" width="8" height="8" rx="1.5" />
          <rect x="3" y="13" width="8" height="8" rx="1.5" />
          <rect x="13" y="13" width="8" height="8" rx="1.5" />
        </svg>
      );
    case "tanstack":
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 7h16M4 12h10M4 17h13" strokeLinecap="round" />
          <circle cx="18" cy="12" r="2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "jotai":
      return (
        <svg {...props}>
          <circle cx="8" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="16" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M11.5 12h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "nodejs":
      return (
        <svg {...props}>
          <path d="M12 1.5l9 5.2v10.6l-9 5.2-9-5.2V6.7l9-5.2zm0 2.3L5.2 7.5v9l6.8 3.9 6.8-3.9v-9L12 3.8z" />
          <path d="M12 7.2c-1.7 0-2.8.7-2.8 1.9 0 1.3.7 1.7 2.3 2.1l.7.2c1 .3 1.4.5 1.4 1.1 0 .5-.4.9-1.3.9-.9 0-1.5-.4-1.8-1l-1.5.9c.5 1.1 1.6 1.8 3.3 1.8 1.8 0 3-.9 3-2.2 0-1.3-.8-1.8-2.5-2.2l-.7-.2c-.8-.2-1.2-.4-1.2-1s.5-.8 1.2-.8c.7 0 1.2.3 1.5.8l1.4-.8c-.5-1-1.5-1.5-2.9-1.5z" />
        </svg>
      );
    case "aws":
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M5 15.5c2.5 2 5.5 3 9.5 3 3 0 5.5-.7 7-1.8" strokeLinecap="round" />
          <path d="M7 8.5l5-4 5 4M8.5 10.5h7v5.5h-7V10.5z" strokeLinejoin="round" />
        </svg>
      );
    case "vitest":
      return (
        <svg {...props}>
          <path d="M12 2l3.2 6.5L22 9.2l-5 4.9 1.2 7L12 17.8 5.8 21.1 7 14.1 2 9.2l6.8-.7L12 2z" />
        </svg>
      );
    case "vite":
      return (
        <svg {...props}>
          <path d="M12 2L2.5 20.5h4.2L12 7.8l5.3 12.7h4.2L12 2z" />
          <path d="M12 10.5L8.8 18h6.4L12 10.5z" opacity=".45" />
        </svg>
      );
    case "redux":
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="6.5" r="2.2" />
          <circle cx="6.5" cy="16.5" r="2.2" />
          <circle cx="17.5" cy="16.5" r="2.2" />
          <path d="M10.2 7.8C8 9.2 6.8 11.5 7 14M13.8 7.8c2.2 1.4 3.4 3.7 3.2 6.2M8.5 16.8h7" strokeLinecap="round" />
        </svg>
      );
    case "tailwind":
      return (
        <svg {...props}>
          <path d="M12 6c-2.7 0-4.4 1.35-5 4.05 1-.9 2.15-1.24 3.45-1.02.74.12 1.27.48 1.84.98C13.4 11 14.2 11.7 15.75 11.7c2.7 0 4.4-1.35 5-4.05-1 .9-2.15 1.24-3.45 1.02-.74-.12-1.27-.48-1.84-.98C14.35 6.7 13.55 6 12 6zM7 12.3c-2.7 0-4.4 1.35-5 4.05 1-.9 2.15-1.24 3.45-1.02.74.12 1.27.48 1.84.98.91.99 1.71 1.68 3.26 1.68 2.7 0 4.4-1.35 5-4.05-1 .9-2.15 1.24-3.45 1.02-.74-.12-1.27-.48-1.84-.98C9.35 13 8.55 12.3 7 12.3z" />
        </svg>
      );
    case "dexie":
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6">
          <ellipse cx="12" cy="6" rx="7" ry="2.5" />
          <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
        </svg>
      );
    case "radix":
      return (
        <svg {...props}>
          <circle cx="7.5" cy="12" r="3.2" />
          <circle cx="16.5" cy="7.5" r="2.2" />
          <circle cx="16.5" cy="16.5" r="2.2" />
        </svg>
      );
    case "zod":
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M5 6h14L5 18h14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "axios":
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M7 12h10M14 8l4 4-4 4M10 8L6 12l4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "eslint":
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2.5l8 4.5v10l-8 4.5-8-4.5v-10l8-4.5z" strokeLinejoin="round" />
          <path d="M9.5 12.5l1.8 1.8 3.7-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "agile":
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 7h11l-2.5-2.5M15 7l-2.5 2.5M20 17H9l2.5 2.5M9 17l2.5-2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M8 12h8M12 8v8" strokeLinecap="round" />
        </svg>
      );
  }
};
