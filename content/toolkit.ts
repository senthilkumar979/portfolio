export interface ToolkitItem {
  name: string;
  why: string;
}

export interface ToolkitCategory {
  label: string;
  title: string;
  description: string;
  items: ToolkitItem[];
}

export const toolkitPage = {
  eyebrow: "Tools",
  title: "What I choose — and why",
  description:
    "Opinionated defaults for platforms and products — organized by craft, with the reasoning behind each pick. Not a logo wall.",
} as const;

export const toolkitCategories: ToolkitCategory[] = [
  {
    label: "Core",
    title: "UI platforms",
    description: "Foundations I reach for when greenfielding long-lived interfaces.",
    items: [
      {
        name: "React",
        why: "Component composition and ecosystem maturity for enterprise UIs that need to last.",
      },
      {
        name: "TypeScript",
        why: "Contracts at the edges — fewer runtime surprises across squads and packages.",
      },
      {
        name: "Next.js",
        why: "When routing, SEO, or server rendering matter for the product surface.",
      },
      {
        name: "Vite",
        why: "Fast SPA shells and library work when I want minimal ceremony and instant feedback.",
      },
    ],
  },
  {
    label: "Architecture",
    title: "Platform patterns",
    description: "How I structure delivery across teams, apps, and shared packages.",
    items: [
      {
        name: "Micro Frontends",
        why: "Independent delivery for large multi-squad platforms without a single release train.",
      },
      {
        name: "Monorepo",
        why: "Shared packages, consistent tooling, and coherent delivery across apps and libraries.",
      },
      {
        name: "Redux Toolkit",
        why: "When orchestration across domains needs predictable, shared store patterns.",
      },
    ],
  },
  {
    label: "State",
    title: "Data & persistence",
    description: "Server state, local atoms, and privacy-first client storage.",
    items: [
      {
        name: "TanStack Query",
        why: "Server state with caching, retries, and invalidation that matches how APIs actually behave.",
      },
      {
        name: "Jotai",
        why: "Fine-grained client state without unnecessary global complexity.",
      },
      {
        name: "IndexedDB",
        why: "Edge-native persistence when data should stay on the device.",
      },
    ],
  },
  {
    label: "Interface",
    title: "Design systems",
    description: "UI primitives and visualization for dense product surfaces.",
    items: [
      {
        name: "Styled-Components",
        why: "Themeable, Figma-faithful design systems with scoped CSS-in-JS.",
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
        name: "Highcharts",
        why: "Production-grade charts when dashboards need dense, interactive visualization.",
      },
    ],
  },
  {
    label: "Services",
    title: "APIs & cloud",
    description: "Runtime, HTTP, cloud, and background work that stay close to the frontend.",
    items: [
      {
        name: "Node.js",
        why: "Pragmatic API layer that matches the frontend team’s mental model.",
      },
      {
        name: "Express",
        why: "Thin HTTP servers when I need control without a heavy framework.",
      },
      {
        name: "AWS",
        why: "Cloud primitives that scale with enterprise delivery and operations.",
      },
      {
        name: "Axios",
        why: "Consistent HTTP clients with interceptors for auth and error shaping.",
      },
      {
        name: "Trigger.dev",
        why: "Durable background jobs and workflows without babysitting custom queues.",
      },
    ],
  },
  {
    label: "Data",
    title: "Backend & edge",
    description: "Managed data, documents, and serverless Redis at the edge.",
    items: [
      {
        name: "Supabase",
        why: "Postgres, auth, and realtime without standing up ops from scratch.",
      },
      {
        name: "MongoDB",
        why: "Flexible document storage for evolving product schemas and content-shaped data.",
      },
      {
        name: "Upstash",
        why: "Serverless Redis for rate limits, caches, and low-latency queues.",
      },
    ],
  },
  {
    label: "Craft",
    title: "Quality & DX",
    description: "What I standardize so reviews stay about architecture, not formatting.",
    items: [
      {
        name: "React Testing Library",
        why: "UI tests focused on behavior users see — not implementation trivia.",
      },
      {
        name: "React Hook Form + Zod",
        why: "Type-safe forms with schemas that double as runtime validation.",
      },
      {
        name: "ESLint + Prettier",
        why: "Shared lint and format rules so reviews stay about architecture.",
      },
      {
        name: "PostHog",
        why: "Product analytics, session replay, and feature flags wired into how teams learn and ship.",
      },
      {
        name: "Agile / design & code reviews",
        why: "Structured feedback loops that raise the floor for the whole team.",
      },
    ],
  },
];

export interface ToolkitCarouselItem {
  name: string;
  why: string;
  category: string;
}

export const toolkitCarouselItems: ToolkitCarouselItem[] =
  toolkitCategories.flatMap((category) =>
    category.items.map((item) => ({
      name: item.name,
      why: item.why,
      category: category.label,
    })),
  );
