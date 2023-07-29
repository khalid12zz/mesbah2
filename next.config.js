/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
 webpack: (config) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: "@mdx-js/loader",
          /** @type {import('@mdx-js/loader').Options} */
          options: {},
        },
      ],
    },)
 
    return config
  },
}

module.exports = nextConfig
