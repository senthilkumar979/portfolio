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
    title: "Should recordings live in the cloud?",
    summary:
      "Most session tools upload clicks, screens, and keystrokes to a server. I had to decide whether Peacock Studio would do the same.",
    before: {
      label: "The easy option",
      items: [
        "Build a cloud recorder so we could launch faster",
        "Send recordings to a server so playback could feel “smart”",
        "Put privacy in the terms of service, not in the product",
      ],
    },
    after: {
      label: "What I chose",
      items: [
        "Keep recordings on the user’s computer",
        "Keep the recorder separate from the customer’s app so it cannot break their page",
        "Build the capture system so new features can be added later",
      ],
    },
    call: "Banks and enterprises will only use this if their data never leaves the browser. Privacy is the product — not a setting.",
    criteria: [
      {
        label: "Where does the data live?",
        body: "If screens and keystrokes cannot leave the browser, a cloud recorder is the wrong design.",
      },
      {
        label: "Does it slow the customer’s app?",
        body: "The recorder runs inside their product. If the page gets slow or messy, they will uninstall it.",
      },
      {
        label: "Can we add features later?",
        body: "Capture, storage, and playback should stay separate so analytics or test tools can plug in without a rewrite.",
      },
    ],
    relatedPost: {
      slug: "persuading-clients-migration",
      label: "How I talk teams through a hard technical change",
    },
  },
  usethishook: {
    title: "Copy the same hooks — or publish a library?",
    summary:
      "Every React app needs the same helpers: toggles, debounce, dialogs, local storage. I had to decide how to share them without slowing the apps that use them.",
    before: {
      label: "The easy option",
      items: [
        "Copy the same toggle and debounce code into every project",
        "Install a popular hook kit that also installs extra libraries",
        "Worry about Next.js and bundle size after the API felt nice",
      ],
    },
    after: {
      label: "What I chose",
      items: [
        "Publish hooks that only need React — nothing else at runtime",
        "Let you import one hook without pulling in the other thirty-one",
        "Make every hook safe to run on the server, then connect to the browser after load",
      ],
    },
    call: "If you only need one hook, your app should not pay for the rest.",
    criteria: [
      {
        label: "Does install add extra libraries?",
        body: "The package should not bring lodash, date tools, or other code the app did not ask for.",
      },
      {
        label: "Can you import just one hook?",
        body: "Unused hooks must stay out of the bundle. One import should not download the whole library.",
      },
      {
        label: "Does it work in any React app?",
        body: "The same import should work in Vite, Next.js, and Module Federation — no special setup.",
      },
    ],
    relatedPost: {
      slug: "migrating-to-react",
      label: "Why teams change their frontend stack",
    },
  },
  "enterprise-frontend-platforms": {
    title: "Rewrite the frontend — or split it so teams can ship?",
    summary:
      "When a large frontend gets slow and fragile, the tempting answer is a full rewrite. That usually stops delivery for months.",
    before: {
      label: "The easy option",
      items: [
        "Keep one giant app that every team ships into",
        "Write standards in slides and hope people follow them",
        "Plan a full rewrite when bugs pile up",
      ],
    },
    after: {
      label: "What I chose",
      items: [
        "Split the frontend so teams can release on their own",
        "Enforce standards in design and code reviews every week",
        "Improve the current system first. Rewrite only a piece that is clearly separate",
      ],
    },
    call: "The fastest rewrite is usually a careful split of the app you already have.",
    criteria: [
      {
        label: "Can we change one piece at a time?",
        body: "If extracting a module freezes every other team, the plan is too big.",
      },
      {
        label: "Can the business keep shipping?",
        body: "If work cannot pause, improve the current system in steps. Do not stop the world for a rewrite.",
      },
      {
        label: "Do we understand the current app?",
        body: "Where the real behavior lives only in people’s heads, try a small slice first — then decide.",
      },
    ],
    relatedPost: {
      slug: "refactor-or-rewrite",
      label: "When I refactor, and when I rewrite",
    },
  },
  securosphere: {
    title: "Many security tools — or one product?",
    summary:
      "Small teams often buy one tool for login, another for MFA, another for captcha. That is hard to run and hard to explain.",
    before: {
      label: "The easy option",
      items: [
        "Buy a different vendor for each security need",
        "Use a generic dashboard that cannot match how each team works",
        "Add security at the end of the project",
      ],
    },
    after: {
      label: "What I chose",
      items: [
        "One product for login, MFA, captcha, and analysis",
        "Let each team have its own name, logo, and APIs",
        "Use real production patterns so mentees can explain the stack in interviews",
      ],
    },
    call: "One place to manage security is easier than four tools that do not talk to each other.",
    criteria: [
      {
        label: "Can one person run it?",
        body: "A security owner should see login and abuse in the same place — not four admin panels.",
      },
      {
        label: "Does it fit how teams work?",
        body: "Some teams need their own branding and APIs. A single shared blob will not fit.",
      },
      {
        label: "Will juniors learn real security?",
        body: "The stack has to be something they can defend in an interview, not a toy demo.",
      },
    ],
    relatedPost: {
      slug: "persuading-clients-migration",
      label: "How I talk teams through a hard technical change",
    },
  },
  stublab: {
    title: "Wait for the backend — or fake the API and keep building?",
    summary:
      "Frontend and QA often sit idle until the real API is ready. I had to decide whether we would wait, or work against a shared fake API.",
    before: {
      label: "The easy option",
      items: [
        "Wait until databases and services are stable",
        "Write one-off mocks that stop matching the real API",
        "Find integration bugs at the end of the sprint",
      ],
    },
    after: {
      label: "What I chose",
      items: [
        "A shared stub server so UI and QA can work while the backend is unfinished",
        "Fake responses that look like the real API the team will ship",
        "Analysts, frontend, backend, and UX all test against the same stubs",
      ],
    },
    call: "If everyone agrees what the API will look like, do not wait for the database to start the next build.",
    criteria: [
      {
        label: "Do the fakes match the real API?",
        body: "Stubs should use the same shapes as production. Convenient fake data that lies will cost time later.",
      },
      {
        label: "Can frontend and QA keep moving?",
        body: "If the backend is incomplete, the rest of the team should still have something honest to build against.",
      },
      {
        label: "Is switching to the real API easy?",
        body: "When the live API arrives, it should be a config change — not a rewrite of the UI.",
      },
    ],
    relatedPost: {
      slug: "migrating-to-react",
      label: "Why teams change their frontend stack",
    },
  },
  stupro: {
    title: "Teach topics — or teach how the job works?",
    summary:
      "Campus courses cover syntax. Students still struggle in interviews and first jobs because they have not practiced shipping real work.",
    before: {
      label: "The easy option",
      items: [
        "Check off topics without asking students to show finished work",
        "Treat communication as optional",
        "Leave hiring prep until after graduation",
      ],
    },
    after: {
      label: "What I chose",
      items: [
        "Structure learning like real engineering work, with AI as a helper",
        "Practice shipping, reviews, and explaining the work",
        "Aim every path at the jump from student to professional",
      ],
    },
    call: "Teach the work loop students will live in at a job — not only the programming language.",
    criteria: [
      {
        label: "Does this help in a real job?",
        body: "Practice should show up in interviews and in the first months at work — not only on a quiz.",
      },
      {
        label: "Can a student prove they are ready?",
        body: "There should be a portfolio or project they can point to, not only a course completion.",
      },
      {
        label: "Can a mentor step in?",
        body: "A MentorBridge coach should be able to review the work against industry standards.",
      },
    ],
  },
};
