const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { VueLoaderPlugin } = require('vue-loader')
const { DefinePlugin } = require('webpack')
// const FlowWebpackPlugin = require('flow-webpack-plugin')
const path = require('path')

const resolve = p => path.resolve('./vue/' + p)
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
        test: /\.js$/,
        loader: 'babel-loader',
        // options: {
        //   emitWarning: true,
        // },
      },
      // {
      //   test: /\.vue$/,
      //   use: ['vue-loader']
      // }
    ]
  },
  plugins: [
    /* config.plugin('define') */
    new DefinePlugin(
      {
        '__WEEX__': 'false',
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        }
      }
    ),
    new HtmlWebpackPlugin({
      template: '../public/index.html'
    }),
    // new VueLoaderPlugin(),
    // new FlowWebpackPlugin(),

  ],
  devServer: {
    open: true
  },
  resolve: {
    alias: {
      // vue: resolve('src/platforms/web/entry-runtime-with-compiler'),
      compiler: resolve('src/compiler'),
      core: resolve('src/core'),
      shared: resolve('src/shared'),
      web: resolve('src/platforms/web'),
      weex: resolve('src/platforms/weex'),
      server: resolve('packages/server-renderer/src'),
      sfc: resolve('packages/compiler-sfc/src'),
      vue$: resolve('src/platforms/web/entry-runtime-with-compiler.js'),
    }
  }
}