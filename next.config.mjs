// import CopyPlugin from 'copy-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // @see https://nextjs.org/learn/dashboard-app/partial-prerendering#implementing-partial-prerendering
    ppr: 'incremental',
  },
  /* // UNUSED: Provide static scripts for low-level tailwind environment (unused in favor of @material-tailwind/react):
   * webpack: (config) => {
   *   const copyPlugin = new CopyPlugin({
   *     patterns: [
   *       {
   *         from: 'node_modules/@material-tailwind/html/scripts',
   *         to: 'static/@material-tailwind/html/scripts',
   *       },
   *     ],
   *   });
   *   config.plugins.push(copyPlugin);
   *   return config;
   * },
   */
};

export default nextConfig;
