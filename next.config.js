/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()
module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'], // Replace `jsx?` with `tsx?`
  swcMinify: true,
})

