import Image from "next/image";

export const RefactorOrRewritePost = () => (
  <div className="prose-portfolio">
    <figure>
      <Image
        src="/blog/refactor-or-rewrite/01-cover.jpg"
        alt="Case study: Refactor or Rewrite — how I chose the right path in a real-world project"
        width={1024}
        height={307}
        className="h-auto w-full rounded-sm ring-1 ring-border"
        priority
      />
    </figure>

    <blockquote>
      <p>
        Should we keep fixing the car while it&apos;s moving or just build a new
        one from scratch? — Every developer, at some point in life
      </p>
    </blockquote>

    <p>
      A few months ago, I was given a challenge in my project:{" "}
      <em>
        We need to improve performance, modernize the tech stack, fix legacy
        issues, and enable new features — fast.
      </em>
    </p>
    <p>
      Naturally, the classic debate popped up: Do I refactor the existing
      codebase or rewrite the entire application?
    </p>
    <p>
      I&apos;d love to say the answer was obvious. But in reality, it took a
      structured approach, some investigation, and a few hilarious
      &quot;what-were-they-thinking&quot; code snippets to make the right
      decision.
    </p>
    <p>Let me take you through that journey.</p>

    <h2>Step 1: What was the problem?</h2>
    <p>
      I was working on a mid-sized React application. It had been around for
      over 8 years, and it had grown like an unpruned tree:
    </p>
    <ul>
      <li>Business logic was entangled with UI logic.</li>
      <li>Deprecated dependencies were there like ghosts.</li>
      <li>State management was a mess.</li>
    </ul>
    <p>
      We had technical debt, inconsistent patterns, and performance
      bottlenecks. Oh, and the ODs (original developers)? All had left.
    </p>

    <h2>Step 2: Assess the codebase honestly</h2>
    <p>I ran through a few questions to get clarity:</p>
    <figure>
      <Image
        src="/blog/refactor-or-rewrite/02-assessment.jpg"
        alt="Codebase assessment table covering stability, upcoming features, test coverage, and modular architecture"
        width={1024}
        height={768}
        className="h-auto w-full rounded-sm ring-1 ring-border"
      />
      <figcaption>Codebase assessment</figcaption>
    </figure>

    <h2>Rewrite or refactor: the strategic framework I used</h2>
    <p>I used this Rewrite vs Refactor Decision Framework:</p>
    <figure>
      <Image
        src="/blog/refactor-or-rewrite/03-framework.jpg"
        alt="Rewrite vs Refactor decision framework comparing criteria such as reparability, delivery pressure, regression risk, and outdated tech stack"
        width={1024}
        height={768}
        className="h-auto w-full rounded-sm ring-1 ring-border"
      />
      <figcaption>Rewrite vs Refactor decision framework</figcaption>
    </figure>

    <h2>Experiment time — a small rewrite spike</h2>
    <p>
      Before committing, I tried rewriting one feature — the user profile module
      — as a test.
    </p>
    <p>What I found:</p>
    <ul>
      <li>
        I spent a lot of time understanding the implicit business rules hidden
        in the old code.
      </li>
      <li>
        I introduced subtle bugs because the legacy behavior wasn&apos;t well
        documented.
      </li>
      <li>Rewriting a small feature took longer than expected.</li>
    </ul>
    <p>This led to a crucial realization:</p>
    <blockquote>
      <p>
        The fastest way to rewrite a codebase is to first refactor it into
        something worth rewriting.
      </p>
    </blockquote>

    <h2>I chose: refactor first, rewrite later</h2>
    <p>
      We decided to refactor incrementally, with the following strategy:
    </p>

    <h3>1. Modularization</h3>
    <p>
      We broke monoliths into modules with clearer responsibilities.
    </p>
    <pre>
      <code>{`// BEFORE - All-in-one React component
const Dashboard = () => {
  useEffect(() => {
    fetch('/api/user-data')...
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      ....
      <table>...</table>
    </>
  )
}

// AFTER - Component decomposition
<DashboardHeader />
<DataTable />`}</code>
    </pre>

    <h3>2. Introduce tests</h3>
    <p>
      Started with smoke and unit tests to cover the basics before touching
      legacy functions.
    </p>

    <h3>3. Strangler pattern</h3>
    <p>
      For major parts like authentication and file uploads, we rewrote those as
      separate common services.
    </p>

    <h2>What I avoided by not rewriting everything</h2>
    <ul>
      <li>
        <strong>Loss of knowledge</strong> — The original character of the app
        would have been lost.
      </li>
      <li>
        <strong>New bugs</strong> — We&apos;d be reintroducing old problems.
      </li>
      <li>
        <strong>Delayed releases</strong> — A rewrite could have taken 6–8
        months with little value until the end.
      </li>
    </ul>

    <h2>When I would consider a full rewrite</h2>
    <ul>
      <li>When the code is unreadable and untestable.</li>
      <li>When the domain has changed drastically.</li>
      <li>When no one understands the current implementation.</li>
      <li>
        When you want to move from monolith to microservices and the current
        architecture blocks you.
      </li>
    </ul>
    <blockquote>
      <p>
        If the codebase was a house, and you can&apos;t enter without risking
        collapse — maybe it&apos;s time to rebuild.
      </p>
    </blockquote>

    <h2>Interesting things I noticed</h2>
    <ul>
      <li>
        A <code>sleep(1000)</code> in production to &quot;fix&quot; a race
        condition.
      </li>
      <li>
        A service method named <code>doExtract()</code> that handled 4
        responsibilities.
      </li>
      <li>
        A function with 1500+ lines of code, called{" "}
        <code>processEverything()</code>.
      </li>
      <li>A component that held the whole content of a page.</li>
      <li>Outdated unit tests.</li>
      <li>
        The same API called multiple times on a page for different components.
      </li>
    </ul>

    <p>
      Whether to rewrite or refactor isn&apos;t just a technical choice —
      it&apos;s a strategic one. It must balance:
    </p>
    <ul>
      <li>Business priorities</li>
      <li>Developer sanity</li>
      <li>Risk management</li>
      <li>Time to market</li>
    </ul>
    <p>My recommendation?</p>
    <blockquote>
      <p>Refactor when you can, rewrite when you must.</p>
    </blockquote>
  </div>
);
