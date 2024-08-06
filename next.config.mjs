/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // @see https://nextjs.org/learn/dashboard-app/partial-prerendering#implementing-partial-prerendering
    ppr: 'incremental',
  },
};

export default nextConfig;
