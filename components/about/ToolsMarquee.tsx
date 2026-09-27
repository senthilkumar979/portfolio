"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ToolIcon } from "@/components/icons/ToolIcon";
import { resolveToolIcon } from "@/components/icons/resolveToolIcon";
import {
  toolkitCarouselItems,
  type ToolkitCarouselItem,
} from "@/content/toolkit";

function categoryHref(category: string) {
  return `/tools#${category.toLowerCase()}`;
}

interface ChipProps {
  item: ToolkitCarouselItem;
  onOpen: (item: ToolkitCarouselItem, el: HTMLElement) => void;
  onClose: () => void;
}

const ToolChip = ({ item, onOpen, onClose }: ChipProps) => (
  <Link
    href={categoryHref(item.category)}
    className="inline-flex h-[7.25rem] w-[7.25rem] shrink-0 flex-col items-center justify-center gap-2.5 rounded-xl border border-border/70 bg-background-elevated/90 px-3 py-3 text-center transition-colors hover:border-accent/50 hover:bg-background-elevated sm:h-32 sm:w-32 sm:gap-3"
    onMouseEnter={(event) => onOpen(item, event.currentTarget)}
    onMouseLeave={onClose}
    onFocus={(event) => onOpen(item, event.currentTarget)}
    onBlur={onClose}
  >
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent ring-1 ring-border sm:h-14 sm:w-14">
      <ToolIcon
        id={resolveToolIcon(item.name)}
        className="h-6 w-6 sm:h-7 sm:w-7"
      />
    </span>
    <span className="line-clamp-2 max-w-full text-[0.75rem] font-medium leading-tight tracking-tight text-foreground/90 sm:text-[0.8rem]">
      {item.name}
    </span>
  </Link>
);

export const ToolsMarquee = () => {
  const shouldReduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isInView, setIsInView] = useState(true);
  const [active, setActive] = useState<ToolkitCarouselItem | null>(null);
  const [panelPos, setPanelPos] = useState({ left: 0, bottom: 56 });

  const clearClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }, []);

  const openItem = useCallback(
    (item: ToolkitCarouselItem, el: HTMLElement) => {
      clearClose();
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
    closeTimer.current = setTimeout(() => setActive(null), 140);
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

  const loopItems = [...toolkitCarouselItems, ...toolkitCarouselItems];
  const isPaused = Boolean(active) || !isInView;

  return (
    <div ref={trackRef} className="relative mt-10 w-full min-w-0">
      <div className="hero-marquee-viewport relative [mask-image:linear-gradient(90deg,transparent,black_4%,black_96%,transparent)]">
        <div
          className={`flex gap-3 ${
            shouldReduceMotion
              ? "w-full flex-wrap"
              : `w-max tools-marquee ${isPaused ? "hero-marquee-paused" : ""}`
          }`}
          onMouseLeave={scheduleClose}
        >
          {(shouldReduceMotion ? toolkitCarouselItems : loopItems).map(
            (item, index) => (
              <ToolChip
                key={`${item.name}-${index}`}
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
          role="tooltip"
          className="absolute z-50 w-[min(18rem,calc(100%-1rem))] rounded-xl border border-border bg-background-elevated p-4 shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
          style={{ left: panelPos.left, bottom: panelPos.bottom }}
          onMouseEnter={clearClose}
          onMouseLeave={scheduleClose}
        >
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-accent">
            {active.category}
          </p>
          <p className="mt-1 text-sm font-semibold tracking-tight text-foreground">
            {active.name}
          </p>
          <p className="mt-2 text-[0.8rem] leading-relaxed text-foreground-muted">
            {active.why}
          </p>
          <p className="mt-2.5 text-[0.7rem] font-medium tracking-wide text-accent">
            See why →
          </p>
        </div>
      ) : null}
    </div>
  );
};
