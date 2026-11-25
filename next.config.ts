import type { NextConfig } from "next";

const permanent = (source: string, destination: string) => ({ source, destination, permanent: true });

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      permanent("/gamrlab", "/lab"),
      permanent("/gamr-lab", "/lab"),
      ...["/team", "/vision", "/mission", "/why-now", "/assets"].map((s) => permanent(s, "/company")),
      permanent("/blog", "/insights"),
      permanent("/blogs", "/insights"),
      permanent("/gamrtag", "/for-brands"),
      ...["/esports", "/creators", "/case-studies"].map((s) => permanent(s, "/for-brands#work")),
    ];
  },
};

export default nextConfig;
