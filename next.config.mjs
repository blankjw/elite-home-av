/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Both hosts are attached to the Vercel project. Send the apex to www
      // so Search Console has one host. 301 is permanent. Set the same
      // redirect on the elitehomeav.com domain in Vercel so the edge does it
      // even before this app runs (see the PR notes).
      {
        source: "/:path*",
        has: [{ type: "host", value: "elitehomeav.com" }],
        destination: "https://www.elitehomeav.com/:path*",
        statusCode: 301,
      },
      {
        source: "/john",
        destination: "/card",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
