/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com'

            },
            {
                protocol: 'https',
                hostname: 'tse3.mm.bing.net'
            }
        ],
    },
};

export default nextConfig;
