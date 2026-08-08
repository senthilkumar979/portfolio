import Image from "next/image";

export const StandingOutInATeamPost = () => (
  <div className="prose-portfolio">
    <p>
      In today&apos;s competitive work environment, not everyone shines, and
      it&apos;s often just a handful of individuals who get recognized for their
      efforts. However, standing out in a team doesn&apos;t require
      extraordinary feats; it&apos;s about dedication, curiosity, and going the
      extra mile.
    </p>
    <p>
      Here&apos;s how I ensure that my contributions don&apos;t go unnoticed —
      and how you can do the same to excel in your role.
    </p>

    <figure>
      <Image
        src="/blog/standing-out-in-a-team/hero.jpg"
        alt="Standing out in a team — five steps from understanding the business to presenting solutions"
        width={1024}
        height={768}
        className="h-auto w-full rounded-sm ring-1 ring-border"
        priority
      />
      <figcaption>Flow to stand out in a team</figcaption>
    </figure>

    <h2>Understanding the business behind the project</h2>
    <p>
      The first step to truly excelling in any project is to understand the
      business context behind it. Whether the project involves a desktop
      application, web platform, or mobile app, gaining a thorough understanding
      of its purpose is crucial.
    </p>
    <blockquote>
      <p>
        Details matter, it&apos;s worth waiting to get it right. — Steve Jobs
      </p>
    </blockquote>
    <p>
      By paying attention to the finer aspects of the product, you gain an edge
      over others who may overlook them.
    </p>
    <p>
      For example, if you&apos;re working on a customer-facing app, take the
      time to explore all the features as if you were the end user. Ask yourself
      questions like:
    </p>
    <ul>
      <li>How is the user experience?</li>
      <li>How can we reduce the number of pages or button clicks?</li>
      <li>
        Are there any scenarios where the app might fail or confuse the user?
      </li>
      <li>
        Is there any way we could remove a few details — or add a few?
      </li>
    </ul>
    <p>
      I test various data sets and explore every option on the screen to know
      the insides of the application. This deep dive not only familiarizes me
      with the product but helps me anticipate potential issues.
    </p>

    <h2>Diving into the code</h2>
    <p>
      Once I&apos;ve thoroughly explored the product from a user perspective, I
      switch hats and look at the project from a developer&apos;s point of view.
      I go through the codebase to understand how the application is built and
      figure out what technologies are being used for various functionalities.
    </p>
    <p>
      For instance, while working on a web app, I might notice that certain
      components are built using React, while others rely on older frameworks.
      Understanding these details allows me to troubleshoot more effectively and
      suggest improvements.
    </p>
    <p>
      In the case of older frameworks, there is always room for migration to
      newer technology. I proposed a migration from Backbone.js to React because
      the application was too old to modify comfortably. A POC helped the team
      see how much the migration would improve performance and maintenance.
    </p>
    <p>
      This technical knowledge can set you apart from teammates who only focus
      on the surface of the project.
    </p>
    <blockquote>
      <p>
        If you always do what you&apos;ve always done, you&apos;ll always get
        what you&apos;ve always got. — Henry Ford
      </p>
    </blockquote>
    <p>
      By learning how the system works under the hood, you position yourself as
      someone who can bring innovative solutions to the table.
    </p>

    <h2>Staying ahead of the curve</h2>
    <p>
      It&apos;s not just about understanding the current state of the project —
      it&apos;s also about being proactive. I make it a point to stay updated on
      upcoming features and tasks. By reviewing what&apos;s on the horizon, I
      ensure that I am always one step ahead.
    </p>
    <p>
      For example, when I know a new feature is set to launch, I familiarize
      myself with its requirements and prepare questions or suggestions before
      development even begins. That shows initiative and commitment, and makes
      it easier for managers and peers to recognize your involvement.
    </p>

    <h2>Engaging in meetings</h2>
    <p>
      Meetings are an excellent platform for standing out. I actively
      participate in discussions, voice opinions, and ask questions whenever
      necessary. That shows I am engaged, prepared, and invested in the
      project&apos;s success.
    </p>
    <blockquote>
      <p>The only dumb question is the one you don&apos;t ask.</p>
    </blockquote>
    <p>
      Thoughtful questions demonstrate critical thinking and care about
      improving the outcome — and that can leave a lasting impression on
      colleagues and superiors.
    </p>

    <h2>Bridging the gap: thinking like a user and a developer</h2>
    <p>
      One of the best ways to distinguish yourself is by identifying gaps
      between the user experience and the technical implementation.
    </p>
    <p>
      I approach this by first thinking like a user: what challenges or pain
      points might they encounter? Then I shift to a developer&apos;s
      perspective — what can we do to fix those problems?
    </p>
    <p>
      In a recent project, a key feature was buried too deep in the app&apos;s
      navigation. As a user, it was frustrating. As a developer, I realized we
      could simplify the flow with minor UI changes. I proposed the solution,
      and we implemented it quickly — improving usability.
    </p>

    <h2>Presenting your solutions</h2>
    <p>
      After identifying areas of improvement, I prepare a presentation to
      organize findings and propose solutions: highlight the problem,
      demonstrate its impact, and offer actionable recommendations.
    </p>
    <p>
      By organizing a meeting and leading the discussion, I take ownership of
      the problem and showcase leadership potential.
    </p>
    <blockquote>
      <p>
        Leadership is not about being in charge. It&apos;s about taking care of
        everything in your charge.
      </p>
    </blockquote>
    <p>
      When you present solutions and collaborate with your team to implement
      them, you naturally position yourself as a leader within the group.
    </p>

    <h2>Standing out requires more than just showing up</h2>
    <p>
      Not everyone on a team will go to these lengths — but when you do, it&apos;s
      almost guaranteed that you will stand out. By understanding the project
      deeply, being proactive, thinking critically, and offering solutions, you
      demonstrate that you are not just a contributor but a key asset to the
      team.
    </p>
    <blockquote>
      <p>
        If your actions inspire others to dream more, learn more, do more and
        become more, you are a leader.
      </p>
    </blockquote>
    <p>
      Excel in your role, and you won&apos;t just stand out — you&apos;ll inspire
      your team to reach greater heights.
    </p>
  </div>
);
