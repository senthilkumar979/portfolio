"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FocusEvent,
  type MouseEvent,
} from "react";
import { useReducedMotion } from "framer-motion";
import {
  heroCarouselItems,
  type HeroCarouselItem,
} from "@/content/heroCarousel";
import { isExternalHref } from "@/lib/links";

const CarouselChip = ({
  item,
  onOpen,
  onClose,
}: {
  item: HeroCarouselItem;
  onOpen: (item: HeroCarouselItem, el: HTMLElement) => void;
  onClose: () => void;
}) => {
  const handleEnter = (event: MouseEvent<HTMLElement> | FocusEvent<HTMLElement>) => {
    onOpen(item, event.currentTarget);
  };

  const className =
    "inline-flex h-[7.25rem] w-[7.25rem] shrink-0 flex-col items-center justify-center gap-2.5 rounded-xl border border-border/70 bg-background-elevated/90 px-3 py-3 text-center transition-colors hover:border-accent/50 hover:bg-background-elevated sm:h-32 sm:w-32 sm:gap-3";

  const content = (
    <>
      {item.logo ? (
        <Image
          src={item.logo}
          alt=""
          width={64}
          height={64}
          className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
        />
      ) : (
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-background text-sm font-semibold tracking-wide text-foreground ring-1 ring-border sm:h-14 sm:w-14 sm:text-base">
          {item.name.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span className="line-clamp-2 max-w-full text-[0.75rem] font-medium leading-tight tracking-tight text-foreground/90 sm:text-[0.8rem]">
        {item.name}
      </span>
    </>
  );

  if (item.href) {
    if (isExternalHref(item.href, Boolean(item.external))) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          onMouseEnter={handleEnter}
          onMouseLeave={onClose}
          onFocus={handleEnter}
          onBlur={onClose}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={item.href}
        className={className}
        onMouseEnter={handleEnter}
        onMouseLeave={onClose}
        onFocus={handleEnter}
        onBlur={onClose}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onMouseEnter={handleEnter}
      onMouseLeave={onClose}
      onFocus={handleEnter}
      onBlur={onClose}
    >
      {content}
    </button>
  );
};

export const HeroCarousel = () => {
  const shouldReduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelId = useId();
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [active, setActive] = useState<HeroCarouselItem | null>(null);
  const [panelPos, setPanelPos] = useState({ left: 0, bottom: 56 });

  const clearClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }, []);

  const openItem = useCallback(
    (item: HeroCarouselItem, el: HTMLElement) => {
      clearClose();
      setIsPaused(true);
      setActive(item);
      const track = trackRef.current;
      if (!track) return;
      const trackRect = track.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const width = Math.min(288, trackRect.width - 16);
      const left = Math.min(
        Math.max(elRect.left - trackRect.left + elRect.width / 2 - width / 2, 8),
        Math.max(trackRect.width - width - 8, 8),
      );
      setPanelPos({ left, bottom: trackRect.height + 12 });
    },
    [clearClose],
  );

  const scheduleClose = useCallback(() => {
    clearClose();
    closeTimer.current = setTimeout(() => {
      setActive(null);
      setIsPaused(false);
    }, 140);
  }, [clearClose]);

  useEffect(() => () => clearClose(), [clearClose]);

  useEffect(() => {
    const node = trackRef.current;
    if (!node || shouldReduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "80px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
        setIsPaused(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const loopItems = [...heroCarouselItems, ...heroCarouselItems];
  const isMarqueePaused = isPaused || Boolean(active) || !isInView;

  return (
    <div ref={trackRef} className="relative mt-14 w-full max-w-full min-w-0 lg:mt-16">
      <p className="mb-4 px-6 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-foreground-muted sm:px-10 lg:px-16">
        Products & companies
      </p>

      <div className="hero-marquee-viewport relative [mask-image:linear-gradient(90deg,transparent,black_4%,black_96%,transparent)]">
        <div
          className={`flex gap-3 ${
            shouldReduceMotion
              ? "w-full max-w-full flex-wrap px-6 sm:px-10 lg:px-16"
              : `w-max hero-marquee ${isMarqueePaused ? "hero-marquee-paused" : ""}`
          }`}
          onMouseLeave={scheduleClose}
        >
          {(shouldReduceMotion ? heroCarouselItems : loopItems).map(
            (item, index) => (
              <CarouselChip
                key={`${item.id}-${index}`}
                item={item}
                onOpen={openItem}
                onClose={scheduleClose}
              />
            ),
          )}
        </div>
      </div>

      {active ? (
        <div
          id={panelId}
          role="tooltip"
          className="absolute z-50 w-[min(18rem,calc(100%-1rem))] max-w-[calc(100%-1rem)] rounded-xl border border-border bg-background-elevated p-4 shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
          style={{ left: panelPos.left, bottom: panelPos.bottom }}
          onMouseEnter={clearClose}
          onMouseLeave={scheduleClose}
        >
          <div className="flex items-start gap-3">
            {active.logo ? (
              <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-foreground ring-1 ring-border">
                <Image
                  src={active.logo}
                  alt=""
                  width={48}
                  height={48}
                  className="h-full w-full object-contain p-1.5"
                />
              </span>
            ) : (
              <span
                className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[0.65rem] font-semibold uppercase tracking-wider ring-1 ring-border ${
                  active.kind === "Personal"
                    ? "bg-accent-soft text-accent"
                    : "bg-background text-foreground-muted"
                }`}
              >
                {active.kind === "Personal" ? "P" : "W"}
              </span>
            )}
            <div className="min-w-0">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-accent">
                {active.kind}
              </p>
              <p className="mt-1 text-sm font-semibold tracking-tight text-foreground">
                {active.name}
              </p>
              <p className="mt-0.5 text-xs text-foreground-muted">{active.role}</p>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-foreground-muted">
                {active.description}
              </p>
              {active.href ? (
                <p className="mt-2.5 text-[0.7rem] font-medium tracking-wide text-accent">
                  {active.external ? "Visit site ↗" : "View details →"}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
