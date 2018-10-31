const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
	mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
			// new TerserPlugin()
      new UglifyJsPlugin({
				uglifyOptions: {
					// Disabling compress fixes the bundle.
					// compress: false
				}
      })
    ]
  }
}
