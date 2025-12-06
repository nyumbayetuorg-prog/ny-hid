/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Allow embedding inside WordPress (important!)
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors *",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
