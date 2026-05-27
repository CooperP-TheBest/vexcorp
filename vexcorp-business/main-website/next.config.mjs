/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Ensure the jet PNG is bundled with the opengraph-image serverless
  // function on Vercel.  Without this, the file is only served as a
  // static CDN asset and is not accessible via fs.readFileSync inside
  // the function.
  experimental: {
    outputFileTracingIncludes: {
      "/opengraph-image": ["./public/images/Hero/vexcorp-jet.png"],
    },
  },
};

export default nextConfig;
