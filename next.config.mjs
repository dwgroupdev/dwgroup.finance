/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: '',
  basePath: '',
  env: {
    NEXT_PUBLIC_ANDROID_APP_URL: process.env.NEXT_PUBLIC_ANDROID_APP_URL,
    NEXT_PUBLIC_IOS_APP_URL: process.env.NEXT_PUBLIC_IOS_APP_URL,
  },
};

export default nextConfig;
