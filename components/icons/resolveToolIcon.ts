import type { ToolIconId } from "@/components/icons/ToolIcon";

const NAME_TO_ICON: Record<string, ToolIconId> = {
  React: "react",
  TypeScript: "typescript",
  "Next.js": "nextjs",
  Vite: "vite",
  "Micro Frontends": "mfe",
  "Module Federation": "mfe",
  Monorepo: "monorepo",
  "TanStack Query": "tanstack",
  "TanStack Table": "tanstack",
  TanStack: "tanstack",
  Jotai: "jotai",
  "Redux Toolkit": "redux",
  "Node.js": "nodejs",
  Express: "nodejs",
  AWS: "aws",
  Axios: "axios",
  "Trigger.dev": "trigger",
  "Dexie.js": "dexie",
  IndexedDB: "dexie",
  "Styled-Components": "styled",
  "Radix UI": "radix",
  Highcharts: "highcharts",
  "React Testing Library": "react",
  "React Hook Form + Zod": "zod",
  "ESLint + Prettier": "eslint",
  PostHog: "posthog",
  Supabase: "supabase",
  MongoDB: "mongo",
  Upstash: "upstash",
  "React + TypeScript": "react",
  "Next.js or Vite": "nextjs",
  "Micro Frontends / Module Federation": "mfe",
  "TanStack Query + Jotai": "tanstack",
  "Node.js + Express": "nodejs",
  "Dexie.js / IndexedDB": "dexie",
  "Agile / design & code reviews": "agile",
};

export function resolveToolIcon(name: string): ToolIconId {
  return NAME_TO_ICON[name] ?? "generic";
}
