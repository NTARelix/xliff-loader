const { resolve } = require('path')
const MemoryFs = require('memory-fs')
const webpack = require('webpack')

/**
 * @param {string} fixture Path to fixture
 * @returns {Promise<webpack.Stats>}
 */
module.exports = fixture => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: resolve(__dirname),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.xlf$/,
          loader: resolve(__dirname, '../src/index.js'),
        },
      ],
    },
  })
  compiler.outputFileSystem = new MemoryFs()
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err)
      if (stats.hasErrors()) reject(new Error(stats.toJson().errors))
      resolve(stats)
    })
  })
}
