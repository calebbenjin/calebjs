const {withContentlayer} = require('next-contentlayer')

module.exports = withContentlayer({
  reactStrictMode: true,

  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
})
