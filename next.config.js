/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: '/john',
        destination: '/card',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
