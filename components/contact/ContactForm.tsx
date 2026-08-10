"use client";

import { useState, type FormEvent } from "react";
import { contactTopics } from "@/content/contact";

type FormStatus = "idle" | "sending" | "success" | "error";

const fieldClassName =
  "mt-2 w-full border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-foreground-muted/50 focus:border-accent";
const labelClassName =
  "text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-foreground-muted";

export const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          topic: data.get("topic"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setError(result.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Network error. Please try again or email me directly.");
    }
  }

  return (
    <section className="mt-20 md:mt-28">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-accent">
        Message
      </p>
      <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Send a note
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-muted">
        Tell me what you&apos;re working on — I reply personally to architecture,
        MentorBridge, and product conversations.
      </p>

      <form
        onSubmit={onSubmit}
        className="relative mt-10 max-w-2xl space-y-6 border-t border-border pt-10"
        noValidate
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className={labelClassName}>Name</span>
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              maxLength={120}
              className={fieldClassName}
              placeholder="Your name"
            />
          </label>
          <label className="block">
            <span className={labelClassName}>Email</span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              maxLength={200}
              className={fieldClassName}
              placeholder="you@company.com"
            />
          </label>
        </div>

        <label className="block">
          <span className={labelClassName}>Topic</span>
          <select
            name="topic"
            required
            defaultValue={contactTopics[0]?.label}
            className={`${fieldClassName} appearance-none`}
          >
            {contactTopics.map((topic) => (
              <option key={topic.label} value={topic.label} className="bg-background">
                {topic.label} — {topic.title}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className={labelClassName}>Message</span>
          <textarea
            name="message"
            required
            rows={6}
            maxLength={5000}
            className={`${fieldClassName} resize-y leading-relaxed`}
            placeholder="Context, timeline, and how I can help…"
          />
        </label>

        <label className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
          Company
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
          <button
            type="submit"
            disabled={status === "sending"}
            className="text-sm font-medium text-accent transition-opacity hover:opacity-80 disabled:opacity-50"
          >
            {status === "sending" ? "Sending…" : "Send message →"}
          </button>
          {status === "success" ? (
            <p className="text-sm text-foreground-muted" role="status">
              Sent — I&apos;ll get back to you soon.
            </p>
          ) : null}
          {status === "error" && error ? (
            <p className="text-sm text-red-400" role="alert">
              {error}
            </p>
          ) : null}
        </div>
      </form>
    </section>
  );
};
