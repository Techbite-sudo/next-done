/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async()=>{
    return[
      {
        source: '/pets',
        destination: '/',
        permanent: false
      },
    ]
  }
}

module.exports = nextConfig
