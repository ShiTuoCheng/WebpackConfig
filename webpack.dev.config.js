/**
 * webpack 打包配置文件开发环境
 */

/*jshint esversion:6 */

const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const webpackBase = require('./webpack.base.config');

module.exports = merge(webpackBase, {
  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9090,
    hot: true
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
});
