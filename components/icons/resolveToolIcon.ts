import type { ToolIconId } from "@/components/icons/ToolIcon";

const NAME_TO_ICON: Record<string, ToolIconId> = {
  React: "react",
  TypeScript: "typescript",
  "Next.js": "nextjs",
  "Micro Frontends": "mfe",
  "TanStack Query": "tanstack",
  Jotai: "jotai",
  "Node.js": "nodejs",
  AWS: "aws",
  Vitest: "vitest",
  "React + TypeScript": "react",
  "Next.js or Vite": "nextjs",
  "Micro Frontends / Module Federation": "mfe",
  "TanStack Query + Jotai": "tanstack",
  "Redux Toolkit": "redux",
  "Tailwind CSS / Styled-Components": "tailwind",
  "Node.js + Express": "nodejs",
  "Dexie.js / IndexedDB": "dexie",
  "Vitest + React Testing Library": "vitest",
  "React Hook Form + Zod": "zod",
  "Radix UI": "radix",
  "TanStack Table": "tanstack",
  Axios: "axios",
  "ESLint + Prettier": "eslint",
  "Agile / design & code reviews": "agile",
};

export function resolveToolIcon(name: string): ToolIconId {
  return NAME_TO_ICON[name] ?? "generic";
}
