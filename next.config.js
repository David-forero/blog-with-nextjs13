/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['links.papareact.com', "cdn.sanity.io", "res.cloudinary.com"]
  }
}
