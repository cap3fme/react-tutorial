const paths = require('../config/paths')

// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js')
module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env)
  // Extend it as you need.
  // For example, add typescript loader:
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: paths.appSrc,
    exclude: /node_modules/,
    loader: require.resolve('ts-loader')
  })

  config.module.rules = config.module.rules.map(rule => {
    if (rule.loader && rule.loader.indexOf('file-loader') > -1) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/
      }
    }
    return rule
  })

  config.module.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: require.resolve('svg-sprite-loader'),
        options: {}
      },
      'svgo-loader'
    ]
  })
  config.resolve.extensions.push('.ts', '.tsx')

  config.resolve.mainFields = [
    'webpack',
    'browser',
    'web',
    'browserify',
    ['jam', 'main'],
    'main'
  ]

  return config
}
