/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  rules: [
    {
      test: /\.mdx?$/,
      use: [
        {
          loader: "@mdx-js/loader",
          /** @type {import('@mdx-js/loader').Options} */
          options: {},
        },
      ],
    },
  ],
}

module.exports = nextConfig
