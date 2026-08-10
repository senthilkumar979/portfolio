"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { SocialIcon } from "@/components/icons/SocialIcon";
import {
  linkPreviews,
  type LinkPreview,
  type LinkPreviewId,
} from "@/content/linkPreviews";
import { externalAnchorProps, isExternalHref } from "@/lib/links";

interface HoverLinkProps {
  preview: LinkPreviewId | LinkPreview;
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
  iconClassName?: string;
}

function isNativeAnchor(href: string, external?: boolean, download?: string) {
  return (
    Boolean(download) ||
    isExternalHref(href, Boolean(external)) ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

export const HoverLink = ({
  preview: previewProp,
  children,
  className,
  showIcon,
  iconClassName = "h-3.5 w-3.5 shrink-0",
}: HoverLinkProps) => {
  const preview: LinkPreview =
    typeof previewProp === "string" ? linkPreviews[previewProp] : previewProp;
  const panelId = useId();
  const rootRef = useRef<HTMLSpanElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [preferAbove, setPreferAbove] = useState(false);
  const shouldShowIcon = showIcon ?? Boolean(preview.icon);
  const isExternal = isExternalHref(preview.href, Boolean(preview.external));
  const useAnchor = isNativeAnchor(
    preview.href,
    preview.external,
    preview.download,
  );

  const clearTimers = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (openTimer.current) clearTimeout(openTimer.current);
    closeTimer.current = null;
    openTimer.current = null;
  }, []);

  const open = useCallback(() => {
    clearTimers();
    openTimer.current = setTimeout(() => {
      const rect = rootRef.current?.getBoundingClientRect();
      if (rect) setPreferAbove(rect.bottom > window.innerHeight - 220);
      setIsOpen(true);
    }, 140);
  }, [clearTimers]);

  const close = useCallback(() => {
    clearTimers();
    closeTimer.current = setTimeout(() => setIsOpen(false), 120);
  }, [clearTimers]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const linkClassName = [
    shouldShowIcon ? "inline-flex items-center gap-1.5" : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const label = (
    <>
      {shouldShowIcon && preview.icon ? (
        <SocialIcon id={preview.icon} className={iconClassName} />
      ) : null}
      {children}
    </>
  );

  const linkProps = {
    href: preview.href,
    className: linkClassName,
    "aria-describedby": isOpen ? panelId : undefined,
    onFocus: open,
    onBlur: close,
    onMouseEnter: open,
    onMouseLeave: close,
    ...(preview.download
      ? { download: preview.download }
      : externalAnchorProps(preview.href, Boolean(preview.external))),
  };

  return (
    <span ref={rootRef} className="relative inline-flex">
      {useAnchor ? <a {...linkProps}>{label}</a> : <Link {...linkProps}>{label}</Link>}

      <span
        id={panelId}
        role="tooltip"
        onMouseEnter={open}
        onMouseLeave={close}
        className={`pointer-events-none absolute left-0 z-50 w-[min(18.5rem,90vw)] max-w-[18.5rem] rounded-xl border border-border bg-background-elevated p-3.5 shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition-[opacity,transform] duration-200 ${
          preferAbove ? "bottom-[calc(100%+0.65rem)]" : "top-[calc(100%+0.65rem)]"
        } ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : preferAbove
              ? "invisible -translate-y-1 opacity-0"
              : "invisible translate-y-1 opacity-0"
        }`}
      >
        <span className="flex items-start gap-3">
          {preview.logo ? (
            <span className="relative mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-background ring-1 ring-border">
              <Image
                src={preview.logo}
                alt=""
                width={36}
                height={36}
                className="h-full w-full object-contain p-1"
              />
            </span>
          ) : preview.icon ? (
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent ring-1 ring-border">
              <SocialIcon id={preview.icon} className="h-4 w-4" />
            </span>
          ) : (
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-[0.65rem] font-semibold uppercase tracking-wider text-accent">
              {preview.title.slice(0, 2)}
            </span>
          )}
          <span className="min-w-0">
            <span className="block text-sm font-semibold tracking-tight text-foreground">
              {preview.title}
            </span>
            <span className="mt-1 block text-[0.8rem] leading-relaxed text-foreground-muted text-wrap">
              {preview.description}
            </span>
            <span className="mt-2.5 block text-[0.7rem] font-medium tracking-wide text-accent">
              {preview.meta}
              {isExternal ? " ↗" : ""}
            </span>
          </span>
        </span>
      </span>
    </span>
  );
};
