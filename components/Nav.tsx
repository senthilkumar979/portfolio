"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HoverLink } from "@/components/HoverLink";
import { navLinks } from "@/content/nav";
import { profile } from "@/content/profile";

const NAV_LOGO = "/hero/nav.png";
const primaryLinks = navLinks.filter((link) => link.href !== "/contact");

export const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHome = pathname === "/";
  const isSolid = !isHome || isScrolled || isOpen;

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const next = window.scrollY > 20;
        setIsScrolled((prev) => (prev === next ? prev : next));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflowY = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`inset-x-0 top-0 z-[100] transition-[background-color,border-color,backdrop-filter] duration-300 ${
          isHome ? "fixed" : "sticky"
        } border-b border-border bg-background ${
          isSolid
            ? "lg:border-border/70 lg:bg-background/95 lg:backdrop-blur-md"
            : "lg:border-transparent lg:bg-transparent lg:backdrop-blur-none"
        }`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[110] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>

        <div className="relative z-[110] flex items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:px-16">
          <Link
            href="/"
            className="group flex items-center gap-3"
            onClick={closeMenu}
          >
            <span className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-border/80 transition-transform group-hover:scale-[1.03] sm:h-10 sm:w-10">
              <Image
                src={NAV_LOGO}
                alt=""
                fill
                sizes="40px"
                className="object-cover object-top"
                priority
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[0.95rem] font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                {profile.shortName}
              </span>
              <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.18em] text-foreground-muted sm:block">
                Portfolio
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {primaryLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-2 text-[0.8125rem] tracking-wide transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-foreground-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive ? (
                    <span
                      className="absolute inset-x-3.5 -bottom-0.5 h-px bg-accent"
                      aria-hidden
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-foreground px-4 py-2 text-[0.8125rem] font-semibold text-background transition-transform hover:scale-[1.02] active:scale-[0.98] lg:inline-flex"
            >
              Contact
            </Link>

            <button
              type="button"
              className="relative z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-foreground/30 lg:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((open) => !open)}
            >
              <span
                className={`absolute h-px w-4 bg-current transition-transform duration-300 ${
                  isOpen ? "translate-y-0 rotate-45" : "-translate-y-1"
                }`}
              />
              <span
                className={`absolute h-px w-4 bg-current transition-transform duration-300 ${
                  isOpen ? "translate-y-0 -rotate-45" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-[90] flex flex-col bg-background px-6 pb-10 pt-24 transition-[opacity,visibility] duration-300 lg:hidden ${
          isOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <nav
          className="flex flex-1 flex-col justify-center gap-1"
          aria-label="Mobile"
        >
          {navLinks.map((link, index) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{
                  transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                }}
                className={`border-b border-border py-4 text-3xl font-semibold tracking-tight transition-all duration-300 ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                } ${isActive ? "text-accent" : "text-foreground"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-wrap gap-5 pt-8 text-sm text-foreground-muted">
          <HoverLink preview="linkedin" className="hover:text-accent">
            LinkedIn
          </HoverLink>
          <HoverLink preview="github" className="hover:text-accent">
            GitHub
          </HoverLink>
          <HoverLink preview="resume" className="hover:text-accent">
            Resume
          </HoverLink>
        </div>
      </div>
    </>
  );
};
