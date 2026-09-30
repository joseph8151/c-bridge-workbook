import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/pte-core", destination: "/books/pte-core", permanent: true },
      { source: "/ielts-general", destination: "/books/ielts-general", permanent: true },
      { source: "/languagecert-academic", destination: "/books/languagecert-academic", permanent: true },
      { source: "/telc-pflege", destination: "/books/telc-pflege", permanent: true },
    ];
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
