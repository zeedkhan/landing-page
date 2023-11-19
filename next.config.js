/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["vercel.com"],
  },
}
);