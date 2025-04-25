/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  // 1. Shim out ws optional dependencies
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      bufferutil: false,
      'utf-8-validate': false,
    };
    return config;
  },

  // 2. Allow building even if ESLint finds errors
  eslint: {
    // Warning: this will skip all ESLint checks in CI/build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
