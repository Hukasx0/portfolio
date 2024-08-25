/** @type {import('next').NextConfig} */
let nextConfig = {};

nextConfig = {
    basePath: '/portfolio',
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
