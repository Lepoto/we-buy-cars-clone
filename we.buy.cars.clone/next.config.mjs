/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['webuycarscms.blob.core.windows.net'], // Add the external domain here
    dangerouslyAllowSVG: true,  // Enable SVGs
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
