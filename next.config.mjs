/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'static.nike.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'images.vans.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'sccy794tycp3utm5.public.blob.vercel-storage.com',
            port: '',
          }
        ],
      },

};

export default nextConfig;
