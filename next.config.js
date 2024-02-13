/*const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})*/

/** @type {import('next').NextConfig} */
let nextConfig = {};

if (process.env.NEXT_PUBLIC_GH_PAGES === 'True') {
    nextConfig = {
        basePath: '/portfolio',
        trailingSlash: true,
        output: 'export'
    };
} 

module.exports = nextConfig // withBundleAnalyzer(nextConfig)
