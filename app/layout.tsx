import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { profile } from "@/content/profile";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.domain),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.shortName}`,
  },
  description: profile.tagline,
  icons: {
    icon: [{ url: "/hero/nav.png", type: "image/png" }],
    apple: [{ url: "/hero/nav.png", type: "image/png" }],
    shortcut: "/hero/nav.png",
  },
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    url: profile.domain,
    siteName: profile.name,
    locale: "en_BE",
    type: "website",
    images: [{ url: profile.images.portrait }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    images: [profile.images.portrait],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plexSans.variable} h-full antialiased`}>
      <body className="flex w-full max-w-full min-h-full flex-col bg-background font-sans text-foreground">
        <Nav />
        <main id="main" className="w-full min-w-0 max-w-full flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
