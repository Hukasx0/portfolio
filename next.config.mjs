/** @type {import('next').NextConfig} */
let nextConfig = {};

if (process.env.NEXT_PUBLIC_GH_PAGES === 'True') {
    nextConfig = {
        basePath: '/portfolio',
        trailingSlash: true,
        output: 'export',
        images: {
            unoptimized: true,
        },
    };
} 

export default nextConfig;
