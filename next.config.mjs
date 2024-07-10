/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5007',
        pathname: '/td/**',
      },
      {
        protocol: 'https',
        hostname: 'thedavid.plitz7.com',
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/td/:path*',
        destination: 'https://thedavid.plitz7.com/:path*', // Proxy to Backend
      }
    ]
  }
};

export default nextConfig;
