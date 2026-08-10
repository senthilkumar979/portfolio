import type { NextConfig } from "next";

const resumeFileName = "Senthil Kumar Resume - Frontend - React.pdf";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.126"],
  async redirects() {
    return [
      { source: "/work", destination: "/projects", permanent: true },
      {
        source: "/work/:slug",
        destination: "/projects/:slug",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/hero/resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: `attachment; filename="${resumeFileName}"`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
