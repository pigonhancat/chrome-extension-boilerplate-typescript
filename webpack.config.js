const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  entry: {
    background: './src/background/background.ts',
    option: './src/option/option.ts',
    popup: './src/popup/popup.ts',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'option/option.html',
      template: './src/option/option.html',
      chunks: ['option'],
    }),
    new HtmlWebpackPlugin({
      filename: 'popup/popup.html',
      template: './src/popup/popup.html',
      chunks: ['popup'],
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '.' },
        { from: 'manifest.json', to: '.' },
      ],
    }),
  ],
  output: {
    filename: '[name]/[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
