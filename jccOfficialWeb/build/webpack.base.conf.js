'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath :
      config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss', '.png'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'js': path.resolve('src/js'),
      'store': path.resolve('src/store'),
      'images': path.resolve('src/images')
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: vueLoaderConfig
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 小于20kb转base64，减少请求次数
          },
        },
        generator: {
          filename: utils.assetsPath('img/[name].[hash:7].[ext]'), // 指定打包路径和文件名
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: "asset/resource",
        generator: {
          filename: utils.assetsPath('media/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)?$/i,
        type: "asset/resource",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 10kb
          }
        },
        generator: {
          filename: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ]
  },
}