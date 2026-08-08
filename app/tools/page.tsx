import type { Metadata } from "next";
import { HoverLink } from "@/components/HoverLink";
import { ToolIcon } from "@/components/icons/ToolIcon";
import { resolveToolIcon } from "@/components/icons/resolveToolIcon";
import { PageHeader } from "@/components/PageHeader";
import { preferredStack, projectTooling } from "@/content/toolkit";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Preferred technologies and project tooling — with why each choice earns a place in the stack.",
};

const ToolkitSection = ({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: { name: string; why: string }[];
}) => (
  <section>
    <h2 className="text-3xl font-semibold tracking-tight text-foreground">
      {title}
    </h2>
    <p className="mt-3 max-w-2xl text-foreground-muted">{description}</p>
    <ul className="mt-10 space-y-0">
      {items.map((item) => (
        <li
          key={item.name}
          className="grid gap-3 border-t border-border py-6 md:grid-cols-[240px_1fr] md:gap-8"
        >
          <h3 className="flex items-center gap-3 font-medium text-foreground">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent ring-1 ring-border">
              <ToolIcon
                id={resolveToolIcon(item.name)}
                className="h-4 w-4"
              />
            </span>
            {item.name}
          </h3>
          <p className="text-foreground-muted md:pt-1.5">{item.why}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <PageHeader
        eyebrow="Tools"
        title="What I choose — and why"
        description="Opinionated defaults for greenfield work, plus the tooling I standardize on for quality and delivery. Not a logo wall."
      />
      <div className="space-y-20">
        <ToolkitSection {...preferredStack} />
        <ToolkitSection {...projectTooling} />
      </div>
    </div>
  );
}
