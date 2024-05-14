const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { DefinePlugin } = require('webpack')

module.exports = {
  entry: './index.js',
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  plugins: [
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        }
      }
    ),
    new HtmlWebpackPlugin({
      template: '../public/index.html'
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    open: true
  },
  resolve: {
    alias: {
      vue$: './vue3/packages/vue/dist/vue.runtime.esm-bundler.js'
    }
  }
}