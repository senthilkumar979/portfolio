import Image from "next/image";
import { HoverLink } from "@/components/HoverLink";
import { PageHeader } from "@/components/PageHeader";
import { aboutConnect, aboutPage } from "@/content/about";
import { closingCta } from "@/content/home";
import { profile } from "@/content/profile";

export const AboutHero = () => (
  <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-16">
    <div>
      <PageHeader
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
        description={aboutPage.description}
      />
      <p className="-mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted">
        {aboutPage.intro}
      </p>
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
        {aboutConnect.map((item) => (
          <HoverLink
            key={item.id}
            preview={item.id}
            className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            {item.id === "email" ? closingCta.email : item.label}
          </HoverLink>
        ))}
      </div>
    </div>

    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm ring-1 ring-border lg:mx-0 lg:max-w-none">
      <Image
        src={profile.images.portrait}
        alt={profile.name}
        fill
        sizes="(max-width: 1024px) 384px, 420px"
        className="object-cover object-top"
        priority
      />
    </div>
  </div>
);
