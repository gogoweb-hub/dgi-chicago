/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/%EC%86%8C%EC%95%A1%EA%B2%B0%EC%A0%9C%ED%98%84%EA%B8%88%ED%99%94', destination: '/' },
      { source: '/%EC%A0%95%EB%B3%B4%EC%9D%B4%EC%9A%A9%EB%A3%8C%ED%98%84%EA%B8%88%ED%99%94', destination: '/info-fee' },
      { source: '/%EC%8B%A0%EC%9A%A9%EC%B9%B4%EB%93%9C%ED%98%84%EA%B8%88%ED%99%94', destination: '/credit-card' },
      { source: '/%EC%B9%B4%EB%93%9C%EA%B9%A1', destination: '/card-cash' },
      { source: '/%EC%A0%95%EC%B1%85%EB%AF%B8%EB%82%A9', destination: '/policy-default' },
      { source: '/%EB%AC%B8%EC%9D%98%ED%95%98%EA%B8%B0', destination: '/contact' },
      { source: '/%EB%B8%94%EB%A1%9C%EA%B7%B8', destination: '/blog' },
    ]
  },
}

export default nextConfig
