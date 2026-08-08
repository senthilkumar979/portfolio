export interface ToolkitItem {
  name: string;
  why: string;
}

export interface ToolkitGroup {
  title: string;
  description: string;
  items: ToolkitItem[];
}

export const preferredStack: ToolkitGroup = {
  title: "Preferred stack",
  description:
    "Technologies I reach for when greenfielding platforms and products.",
  items: [
    {
      name: "React + TypeScript",
      why: "Strong typing and component composition for long-lived enterprise UIs.",
    },
    {
      name: "Next.js or Vite",
      why: "Next when SEO/SSR matters; Vite when I want a fast SPA shell.",
    },
    {
      name: "Micro Frontends / Module Federation",
      why: "Independent delivery for large multi-squad platforms.",
    },
    {
      name: "TanStack Query + Jotai",
      why: "Server state and fine-grained client state without unnecessary global complexity.",
    },
    {
      name: "Redux Toolkit",
      why: "When orchestration across domains needs predictable, shared store patterns.",
    },
    {
      name: "Tailwind CSS / Styled-Components",
      why: "Tailwind for speed; Styled-Components when Figma-level design systems demand it.",
    },
    {
      name: "Node.js + Express",
      why: "Pragmatic API layer that stays close to the frontend team’s mental model.",
    },
    {
      name: "Dexie.js / IndexedDB",
      why: "Privacy-first, edge-native persistence without shipping sensitive data to servers.",
    },
    {
      name: "AWS",
      why: "Cloud primitives that scale with enterprise delivery and operations.",
    },
  ],
};

export const projectTooling: ToolkitGroup = {
  title: "Project tooling",
  description:
    "What I standardize on for quality, DX, and predictable delivery.",
  items: [
    {
      name: "Vitest + React Testing Library",
      why: "Fast unit/UI tests focused on behavior, not implementation trivia.",
    },
    {
      name: "React Hook Form + Zod",
      why: "Type-safe forms with schemas that double as runtime validation.",
    },
    {
      name: "Radix UI",
      why: "Accessible primitives without fighting a heavy design system.",
    },
    {
      name: "TanStack Table",
      why: "Headless tables that scale from simple lists to complex data grids.",
    },
    {
      name: "Axios",
      why: "Consistent HTTP clients with interceptors for auth and error shaping.",
    },
    {
      name: "ESLint + Prettier",
      why: "Shared formatting and lint rules so reviews stay about architecture.",
    },
    {
      name: "Agile / design & code reviews",
      why: "Structured feedback loops that raise the floor for the whole team.",
    },
  ],
};
