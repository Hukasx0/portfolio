/** @type {import('next').NextConfig} */
let nextConfig = {
    basePath: '/portfolio',
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
    distDir: "./out"
};

export default nextConfig;
