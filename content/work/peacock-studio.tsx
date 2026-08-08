export const PeacockStudioBody = () => (
  <div className="prose-portfolio">
    <h2>The problem</h2>
    <p>
      Engineering and QA teams spend hours documenting workflows, capturing
      regressions, and explaining processes — often with brittle screenshots and
      tribal knowledge that goes stale the moment the UI changes.
    </p>
    <p>
      Most session tools also push sensitive interaction data to the cloud. For
      enterprise environments, that is a non-starter.
    </p>

    <h2>What I built</h2>
    <p>
      Peacock Studio is an edge-native browser application — a Chrome/Edge
      extension paired with a React-based platform — that automates workflow
      documentation, visual testing, and interactive step-by-step process
      playback.
    </p>
    <p>
      Recording happens entirely on the client: high-frequency interactions, DOM
      mutations, screenshots, and application events stay local, with automatic
      masking of sensitive information and zero server-side data collection.
    </p>

    <h2>Architecture</h2>
    <p>
      The product uses a closed Shadow DOM boundary, Dexie.js on IndexedDB, and
      browser APIs to keep capture private and performant. An event-driven
      recording pipeline is optimized for low memory usage so session capture
      does not degrade the host application.
    </p>
    <p>
      The architecture is modular so future capabilities — test generation,
      workflow analytics, bug reporting, and broader developer productivity tools
      — can plug in without rewriting the core.
    </p>

    <h2>Tools chosen</h2>
    <ul>
      <li>
        <strong>React + TypeScript</strong> — maintainable UI for a complex
        extension surface.
      </li>
      <li>
        <strong>Shadow DOM</strong> — isolate the recorder UI from host page
        styles and scripts.
      </li>
      <li>
        <strong>Dexie.js / IndexedDB</strong> — structured local storage without
        a backend dependency.
      </li>
      <li>
        <strong>Browser extension APIs</strong> — capture where work already
        happens: inside the browser.
      </li>
    </ul>

    <h2>Outcomes</h2>
    <p>
      A privacy-first foundation for documenting and replaying real product
      workflows — designed for engineering and QA teams that need fidelity
      without compromising client data.
    </p>
  </div>
);
