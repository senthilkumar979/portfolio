export interface ProjectFrameworkSide {
  label: string;
  items: string[];
}

export interface ProjectFrameworkCriterion {
  label: string;
  body: string;
}

export interface ProjectFramework {
  title: string;
  summary: string;
  before: ProjectFrameworkSide;
  after: ProjectFrameworkSide;
  call: string;
  criteria: ProjectFrameworkCriterion[];
  relatedPost?: {
    slug: string;
    label: string;
  };
}

export const projectFrameworks: Record<string, ProjectFramework> = {
  "peacock-studio": {
    title: "Cloud session tools vs edge-native capture",
    summary:
      "The same decision lens as a migration playbook — optimize for where data can live, not just feature checklists.",
    before: {
      label: "Default path",
      items: [
        "Ship a SaaS recorder with server-side storage for speed to market",
        "Accept cloud processing as the cost of “smart” playback",
        "Treat privacy as a policy page, not an architecture constraint",
      ],
    },
    after: {
      label: "Chosen path",
      items: [
        "Keep capture, masking, and storage on the client (IndexedDB)",
        "Isolate the recorder UI in Shadow DOM so host apps stay safe",
        "Build modular pipelines so analytics can plug in later without a rewrite",
      ],
    },
    call: "If enterprise trust is the product, privacy has to be the architecture — not a toggle.",
    criteria: [
      {
        label: "Data residency",
        body: "Can sensitive DOM and keystrokes leave the browser? If no, cloud-first dies early.",
      },
      {
        label: "Host impact",
        body: "Will capture degrade the customer’s app? Memory and isolation matter as much as features.",
      },
      {
        label: "Rewrite risk",
        body: "Can future modules land without rebuilding the core pipeline? Prefer seams over monoliths.",
      },
    ],
    relatedPost: {
      slug: "persuading-clients-migration",
      label: "Migration persuasion playbook",
    },
  },
  "enterprise-frontend-platforms": {
    title: "Monolith frontend vs bounded platforms",
    summary:
      "Lifted from the refactor-vs-rewrite framework: repair what you can, rewrite only where the boundary is clear.",
    before: {
      label: "Pressure default",
      items: [
        "One giant frontend everyone ships into under release pressure",
        "Standards as slides — not enforced in reviews",
        "Full rewrite fantasies when defect rates climb",
      ],
    },
    after: {
      label: "Chosen path",
      items: [
        "Micro frontend boundaries so squads deploy independently",
        "Governance + design reviews that raise the floor weekly",
        "Refactor toward seams first; rewrite only behind a proven boundary",
      ],
    },
    call: "The fastest rewrite is usually a refactor that creates something worth rewriting.",
    criteria: [
      {
        label: "Reparability",
        body: "Can modules be extracted without freezing delivery for quarters?",
      },
      {
        label: "Delivery pressure",
        body: "If business can’t pause, prefer incremental seams over a big-bang rewrite.",
      },
      {
        label: "Regression risk",
        body: "Where behavior is tribal knowledge, spike small — then decide.",
      },
    ],
    relatedPost: {
      slug: "refactor-or-rewrite",
      label: "Refactor or rewrite framework",
    },
  },
  securosphere: {
    title: "Bolt-on tools vs layered security platform",
    summary:
      "Same consulting lens as selling a migration: start from pain, then choose the smallest architecture that compounds.",
    before: {
      label: "Fragmented default",
      items: [
        "Separate vendors for auth, MFA, captcha, and monitoring",
        "One-size dashboards that ignore team branding and APIs",
        "Security treated as a late integration, not a product surface",
      ],
    },
    after: {
      label: "Chosen path",
      items: [
        "One platform with layered controls (OAuth, MFA, captcha, analysis)",
        "Team / sub-team models with custom identity and integrations",
        "Stack choices mentees can defend in interviews — production patterns",
      ],
    },
    call: "Prefer a coherent control plane over a pile of point tools that never share context.",
    criteria: [
      {
        label: "Operator load",
        body: "Can one security owner reason about identity and abuse in one place?",
      },
      {
        label: "Org fit",
        body: "Do teams need their own branding and API surfaces, or a shared blob?",
      },
      {
        label: "Learning value",
        body: "Will early-career engineers learn real protocols under delivery pressure?",
      },
    ],
    relatedPost: {
      slug: "persuading-clients-migration",
      label: "Selling modernization",
    },
  },
  stublab: {
    title: "Wait on backends vs stub-first delivery",
    summary:
      "A delivery decision framework: unblock consumers first when providers are incomplete — without lying about the contract.",
    before: {
      label: "Blocked default",
      items: [
        "UI and QA idle until databases and services stabilize",
        "Ad hoc mocks that drift from real response shapes",
        "Integration surprises postponed to the end of the sprint",
      ],
    },
    after: {
      label: "Chosen path",
      items: [
        "Stub server as a first-class environment for parallel work",
        "Configurable responses that mirror shipping API contracts",
        "Cross-functional loop — analysts, FE, BE, UX — against the same stubs",
      ],
    },
    call: "If the contract is clear, don’t let the database gate the next iteration.",
    criteria: [
      {
        label: "Contract honesty",
        body: "Do stubs encode the real shapes, or invent convenience responses?",
      },
      {
        label: "Parallelism",
        body: "Can FE/QA progress while providers are still incomplete?",
      },
      {
        label: "Handoff cost",
        body: "Will swapping stubs for live APIs be a config change — or a rewrite?",
      },
    ],
    relatedPost: {
      slug: "migrating-to-react",
      label: "Why teams migrate platforms",
    },
  },
  stupro: {
    title: "Lecture content vs production-minded learning",
    summary:
      "Curriculum decisions mirror engineering ones: practice under review beats slideware.",
    before: {
      label: "Campus default",
      items: [
        "Topic checklists without portfolio pressure",
        "Soft skills treated as optional electives",
        "Hiring readiness postponed until after graduation",
      ],
    },
    after: {
      label: "Chosen path",
      items: [
        "AI-assisted learning structured like real engineering work",
        "Paths that emphasize habits — shipping, reviews, storytelling",
        "Outcomes aimed at the student-to-professional jump",
      ],
    },
    call: "Teach the loop students will live in at work — not only the syntax.",
    criteria: [
      {
        label: "Transfer",
        body: "Does practice show up in interviews and first-job delivery?",
      },
      {
        label: "Accountability",
        body: "Are there artifacts (portfolios, projects) that prove readiness?",
      },
      {
        label: "Mentorship fit",
        body: "Can MentorBridge coaches intervene with industry standards?",
      },
    ],
  },
};
