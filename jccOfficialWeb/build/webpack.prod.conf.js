const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")
const BuildTimePlugin = require("./buildTimePlugin")
const TerserPlugin = require("terser-webpack-plugin")

const env = require('../config/prod.env')

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        // 用正则表达式去匹配要用到Loader转换的css文件
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        enforce: "pre",
        use: [
          {
            loader: ImageMinimizerPlugin.loader,
            options: {
              minimizer: {
                implementation: ImageMinimizerPlugin.sharpMinify,
                options: {
                  encodeOptions: {
                    jpeg: {
                      quality: 100,
                    },
                    png: {
                      quality: 90,
                    },
                    gif: {},
                    svg: {}
                  },
                }
              },
            },
          },
        ],
      },
    ]
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      ignoreOrder: true,
    }),
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new BuildTimePlugin(),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      hash: true,
      chunksSortMode: 'auto'
    }),
    // keep module.id stable when vendor modules does not change
    new webpack.ids.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // split vendor js into its own file
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks(module) {
    //     // any required modules inside node_modules are extracted to vendor
    //     return (
    //       module.resource &&
    //       /\.js$/.test(module.resource) &&
    //       module.resource.indexOf(
    //         path.join(__dirname, '../node_modules')
    //       ) === 0
    //     )
    //   }
    // }),
    // // extract webpack runtime and module manifest to its own file in order to
    // // prevent vendor hash from being updated whenever app bundle is updated
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   minChunks: Infinity
    // }),
    // // This instance extracts shared chunks from code splitted chunks and bundles them
    // // in a separate chunk, similar to the vendor chunk
    // // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'app',
    //   async: 'vendor-async',
    //   children: true,
    //   minChunks: 3
    // }),

    // copy custom static assets
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../static'),
          to: config.build.assetsSubDirectory,
          globOptions: {
            gitignore: true,
            ignore: ['**/.gitkeep']
          }
        }
      ]
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
      parallel:true,
      extractComments: false, //不将注释提取到单独的文件中
      terserOptions: {
        ecma: undefined,
        warnings: false,
        parse: {},
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log'], // 移除console
        },
      },
    })],
    splitChunks: {
			chunks: 'all', // 对所有模块都检查是否需要分割
			// 以下是默认值
			minSize: 20000, // 分割的代码的最小大小 （20kb）
			minRemainingSize: 0, // 与miniSize类似，分割出来的文件的大小不能为0
			minChunks: 1, // 在不同的入口文件中至少被引用的次数，满足了条件才会被分割
			maxAsyncRequests: 30, // 按需加载时并行加载的文件的最大数量
			maxInitialRequests: 30, // 入口js文件的最大并行请求数量
			enforceSizeThreshold: 50000, // 超过50kb的一定会单独打包 
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vender',
          chunks: 'initial',
          priority: -10,
          minSize: 100 * 1024,
          maxSize: 5 * 1000 * 1024,
          reuseExistingChunk: true
        },
        manifest: {
          name: 'manifest',
          chunks: 'all',
          priority: -20,
          reuseExistingChunk: true
        },
      }
    },
    moduleIds: 'deterministic',
  },
})

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig