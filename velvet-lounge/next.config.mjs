/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  
    // Add the following lines:
    // This tells Next.js not to use its image optimization feature,
    // which avoids the need for the 'sharp' library during the build.
    images: {
      unoptimized: true,
    },
  }
  
  export default nextConfig
  