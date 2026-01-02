/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: process.env.NEXT_BUILD === "true" ? "/website" : undefined,
};

export default nextConfig;
