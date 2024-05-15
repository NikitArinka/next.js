/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    // Forces nextjs to use experimental react which has the useMemoCache hook.
    ppr: true,
    reactCompiler: true,
  },
}

module.exports = nextConfig
