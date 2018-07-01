const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]_[local]_[hash:base64]',
                sourceMap: true,
                minimize: true
              }
            },
            'postcss-loader',
            'sass-loader']
          })
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', {} ),
    new HtmlWebPackPlugin({
      // inject: false,
      hash: true,
      template: './src/index.html',
      filename: './index.html'
    }),
    new ExtractTextPlugin(
      {
        filename: 'main.[hash].css',
        disable: false,
        allChunks: true,
      },
    ),
    new WebpackMd5Hash(),
  ]
};