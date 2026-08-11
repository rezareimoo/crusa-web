import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "crusallc.com",
          },
        ],
        destination: "https://www.crusallc.com/:path*",
        permanent: true,
      },
      {
        source: "/services/onsite-data-destruction",
        destination: "/services/hard-drive-shredding",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
