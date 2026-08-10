"use client";

import Link from "next/link";
import { HoverLink } from "@/components/HoverLink";
import { LocationLabel } from "@/components/LocationMap";
import { profile } from "@/content/profile";

export const Footer = () => (
  <footer className="mt-auto border-t border-border">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-foreground-muted md:flex-row md:items-center md:justify-between md:px-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <p>© {new Date().getFullYear()} {profile.name}.</p>
        <LocationLabel location={profile.location} />
      </div>
      <div className="flex flex-wrap gap-5">
        <Link href="/contact" className="hover:text-accent">
          Contact
        </Link>
        <Link href="/feed.xml" className="hover:text-accent">
          RSS
        </Link>
        <HoverLink preview="linkedin" className="hover:text-accent">
          LinkedIn
        </HoverLink>
        <HoverLink preview="github" className="hover:text-accent">
          GitHub
        </HoverLink>
        <HoverLink preview="medium" className="hover:text-accent">
          Medium
        </HoverLink>
        <HoverLink preview="resume" className="hover:text-accent">
          Resume
        </HoverLink>
      </div>
    </div>
  </footer>
);
