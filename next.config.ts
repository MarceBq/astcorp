import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Cuando el cliente entregue imágenes alojadas externamente (CDN, DAM, etc.)
    // agregar aquí los hosts permitidos.
    remotePatterns: [],
  },
  poweredByHeader: false,
};

export default nextConfig;
