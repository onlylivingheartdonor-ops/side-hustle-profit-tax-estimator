/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'stoptrialbilling.com' }],
        destination: 'https://www.stoptrialbilling.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig