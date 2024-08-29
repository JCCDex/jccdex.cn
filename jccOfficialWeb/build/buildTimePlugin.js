const HtmlWebpackPlugin = require('html-webpack-plugin');

class BuildTimePlugin {
  apply (compiler) {
    compiler.hooks.compilation.tap('buildTimePlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'buildTimePlugin',
        (data, cb) => {
          // Manipulate the content
          data.html = `<!-- [${new Date().toLocaleString()}] -->` + data.html
          // Tell webpack to move on
          cb(null, data)
        }
      )
    })
  }
}

module.exports = BuildTimePlugin