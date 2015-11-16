const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap!postcss'
      },
      {
        test: /\.sass$/,
        loader: 'style!css?sourceMap!postcss!sass?sourceMap&indentedSyntax!import-glob'
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      }
    ]
  },
  postcss: function() {
    const autoprefixer = require('autoprefixer-core')
    return [autoprefixer]
  }
}
