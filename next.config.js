/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'res.cloudinary.com'],
  },
  experimental: {
    serverComponentsExternalPackages: ['cloudianary', 'graphql-request']
  }
};

module.exports = nextConfig;
