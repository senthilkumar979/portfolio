# Senthil Kumar Thangavel — Portfolio

Multi-page portfolio for [senthilkumar.mentorbridge.in](https://senthilkumar.mentorbridge.in).

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Develop

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm start
```

## Content

All content lives in `content/` as TypeScript modules and React components — no CMS, Markdown, or database.

- Blog posts: add a component under `content/blog/posts/`, register it in `content/blog/index.ts`, drop images in `public/blog/<slug>/`
- Work / experience: same pattern under `content/work` and `content/experience`
