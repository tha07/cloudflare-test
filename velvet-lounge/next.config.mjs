/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true, // optional but useful
    },
    output: 'standalone', // required for Cloudflare Workers
  };
  
  export default nextConfig;
  