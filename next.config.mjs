/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/enerlites/Email-Signature-Generator/**',
      },
    ],
  },
};

export default nextConfig;
