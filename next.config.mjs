/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  basePath: isGitHubPages ? '/portfolio' : '',
  assetPrefix: isGitHubPages ? '/portfolio/' : '',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: './out',
};

export default nextConfig;
