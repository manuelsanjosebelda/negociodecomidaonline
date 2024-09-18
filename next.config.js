/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'manu-food-ordering.s3.amazonaws.com',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Configuración personalizada de Webpack
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;

