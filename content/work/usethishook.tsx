export const UseThisHookBody = () => (
  <div className="prose-portfolio">
    <h2>The problem</h2>
    <p>
      Most teams rewrite the same React utilities in every app — toggles, debounce,
      overlays, local storage, and file pickers — or pull in a hook kit that
      arrives with lodash, date libraries, and a heavier{" "}
      <code>node_modules</code> than the feature deserves.
    </p>
    <p>
      Copy-pasted snippets drift. Shared packages that are not tree-shakeable or
      SSR-safe become a tax on every host: Vite, Next.js, CRA, and Module
      Federation included.
    </p>

    <h2>What I built</h2>
    <p>
      <a
        href="https://usethishook.mentorbridge.in/"
        target="_blank"
        rel="noopener noreferrer"
      >
        useThisHook
      </a>{" "}
      is an open-source, typed library of custom React hooks you can drop into
      any app. Thirty-two named, tree-shakeable hooks cover UI, state, forms,
      lists, overlays, and the browser — published as{" "}
      <a
        href="https://www.npmjs.com/package/usethishook"
        target="_blank"
        rel="noopener noreferrer"
      >
        usethishook
      </a>{" "}
      with generated TypeScript types and zero runtime dependencies.
    </p>
    <p>
      Confirm, prompt, overlay, file pick, and step-flow resolve in the click
      handler — <code>{`await confirm({ title, danger })`}</code> — instead of
      an effect machine. Put <code>render()</code> in the tree once. That is
      the overlay contract.
    </p>

    <h2>Approach</h2>
    <ul>
      <li>
        React is the only peer. Hooks sit on <code>useState</code>,{" "}
        <code>useEffect</code>, and browser APIs — no extra runtime package.
      </li>
      <li>
        Named exports, <code>sideEffects: false</code>, ESM + CJS +{" "}
        <code>.d.ts</code>. Import one hook; leave the rest out of the bundle.
      </li>
      <li>
        Window, storage, and observers fall back on the server and subscribe
        after hydration so the same import works in SSR hosts.
      </li>
      <li>
        A live playground documents each hook with preview, API, and a
        copyable example — the docs site is the product surface.
      </li>
    </ul>

    <h2>Tools chosen</h2>
    <ul>
      <li>
        <strong>React + TypeScript</strong> — the public API is typed at the
        import. No <code>@types</code> package. No default export.
      </li>
      <li>
        <strong>tsup</strong> — ESM, CJS, and declaration files from one build.
      </li>
      <li>
        <strong>Vitest</strong> — hook behavior under test before every commit
        and publish.
      </li>
      <li>
        <strong>Vite playground</strong> — docs you can try, not only read.
      </li>
    </ul>

    <h2>Outcomes</h2>
    <p>
      A MIT-licensed package teams can install without inheriting a dependency
      graph — and a public artifact of how I design reusable frontend
      foundations: small surface, strict types, and host-agnostic DX.
    </p>
    <p>
      Source:{" "}
      <a
        href="https://github.com/senthilkumar979/useThisHook"
        target="_blank"
        rel="noopener noreferrer"
      >
        github.com/senthilkumar979/useThisHook
      </a>
      .
    </p>
  </div>
);
