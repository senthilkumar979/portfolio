export const StubLabBody = () => (
  <div className="prose-portfolio">
    <h2>The problem</h2>
    <p>
      Frontend and integration work often blocks on backends that are incomplete,
      unstable, or still wired to heavy database dependencies. Teams lose days
      waiting for environments instead of iterating on contracts and UX.
    </p>
    <p>
      Stubbing exists, but most setups are ad hoc — brittle mocks, undocumented
      responses, and little shared tooling across a squad.
    </p>

    <h2>What we built</h2>
    <p>
      StubLab is an intelligent stub server from the MentorBridge innovation lab
      (with SSMIET IIC): craft, configure, and test APIs without depending on a
      traditional database so development and QA can move in parallel.
    </p>
    <p>
      I mentored the product direction and engineering craft — helping the team
      shape a tool that simulates API behavior quickly and keeps contracts honest
      between consumers and providers.
    </p>

    <h2>Approach</h2>
    <ul>
      <li>Stub-first workflows so UI and integration work is not gated on backend readiness.</li>
      <li>Configurable responses that mirror real API shapes teams will ship.</li>
      <li>Cross-functional delivery with analysts, frontend, backend, and UX in one loop.</li>
      <li>Mentorship through reviews so early-career engineers own production-quality code.</li>
    </ul>

    <h2>Tools chosen</h2>
    <ul>
      <li>
        <strong>Node.js</strong> — a pragmatic stub runtime close to how APIs are
        consumed.
      </li>
      <li>
        <strong>React</strong> — a clear surface for configuring and exercising
        stubs.
      </li>
      <li>
        <strong>Contract-oriented stubbing</strong> — speed without losing fidelity
        to real endpoints.
      </li>
    </ul>

    <h2>Outcomes</h2>
    <p>
      Faster API iteration for MentorBridge product teams — and a concrete case
      study in shipping developer tooling under mentorship, from idea to a live
      product surface.
    </p>
  </div>
);
