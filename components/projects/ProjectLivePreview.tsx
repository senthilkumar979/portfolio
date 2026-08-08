import { externalAnchorProps } from "@/lib/links";

interface ProjectLivePreviewProps {
  title: string;
  url: string;
}

export const ProjectLivePreview = ({ title, url }: ProjectLivePreviewProps) => {
  const host = (() => {
    try {
      return new URL(url).host;
    } catch {
      return url;
    }
  })();

  return (
    <section className="">
      {/* <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
        Live preview
      </p>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground-muted">
        A mini window onto the live site — scroll inside the frame to explore.
      </p> */}

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:gap-8">
        <div className="w-[400px] shrink-0 overflow-hidden rounded-lg bg-background-elevated shadow-[0_18px_40px_rgba(0,0,0,0.35)] ring-1 ring-border">
          <div className="flex items-center gap-3 border-b border-border bg-[#1a222c] px-3 py-2.5">
            <div className="flex items-center gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="min-w-0 flex-1 truncate rounded-md bg-background/60 px-2.5 py-1 text-[0.65rem] text-foreground-muted ring-1 ring-border">
              {host}
            </div>
          </div>

          <div className="h-auto min-w-[600px] bg-background">
            <iframe
              src={url}
              title={`${title} live site`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
