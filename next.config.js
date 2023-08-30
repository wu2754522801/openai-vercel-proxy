/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/api/openai/', // 重定向到你的函数的 API 路径
      },
    ];
  },
}

module.exports = nextConfig
