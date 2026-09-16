import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/imagenes/**',
      },
    ],
  },
  async redirects() {
    return [
      // Property slugs shift when a property's row position changes in its
      // city's spreadsheet (id is derived from row position, not a fixed
      // key). These are known cases flagged by Google Search Console as
      // dead/noindexed URLs — redirecting preserves any existing SEO value
      // and fixes links people may have already shared or bookmarked.
      {
        source: '/properties/tulum-av-del-parque-165',
        destination: '/properties/tulum-av-del-parque-1969604999',
        permanent: true,
      },
      {
        source: '/properties/tulum-supermanzana-qroo-109-179',
        destination: '/properties/tulum-supermanzana-qroo-109-928212848',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
