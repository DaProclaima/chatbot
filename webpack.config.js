const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const OptimizedCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin }= require('clean-webpack-plugin');
module.exports = {
  stats: { children: false },
  entry: './src/index.js',
  output: {
    filename: 'src/[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'sass-loader',
      //   ]
      // },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader','css-loader','sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new CleanWebpackPlugin(),

  ],
  devServer: {
    host: '127.0.0.1',
    port: 9090,
    hot: true,
    open: true,
    inline: true
  }
};
