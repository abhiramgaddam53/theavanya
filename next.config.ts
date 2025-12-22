import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:; font-src 'self' data:; connect-src 'self' https:; frame-src 'self' https://www.google.com https://maps.google.com https://www.google.com/maps https://www.google.com/maps/embed https://www.googleusercontent.com; frame-ancestors 'none';",
          },
        ],
      },
    ];
  },
  turbopack: {
    root: ".",
  },
};

export default nextConfig;
