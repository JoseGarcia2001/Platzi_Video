/* eslint-disable quotes */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const ManifestWebpackPlugin = require('webpack-manifest-plugin');

require('dotenv').config();

const isDev = process.env.ENV === 'development';
const entry = ["./src/frontend/index.js"];

if (isDev) {
  entry.push("webpack-hot-middleware/client");
}

module.exports = {
  entry,
  mode: process.env.ENV,
  output: {
    path: path.resolve(__dirname, "src/server/public"),
    filename: isDev ? "assets/app.js" : "assets/app-[hash].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isDev ? "assets/vendor.js" : "assets/vendor-[contenthash].js",
          enforce: true,
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    isDev ? new webpack.HotModuleReplacementPlugin() : () => {},
    isDev ?
      () => {} :
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        filename: "[path][base].gz",
      }),
    isDev ? () => {} : new ManifestWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isDev ? "assets/app.css" : "assets/app-[hash].css",
    }),
  ],
};
