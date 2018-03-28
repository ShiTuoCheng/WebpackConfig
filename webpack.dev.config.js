/**
 * webpack 打包配置文件开发环境
 */

/*jshint esversion:6 */

const merge = require('webpack-merge');
const path = require('path');
const webpackBase = require('./webpack.base.config');

module.exports = merge(webpackBase, {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9090
  }
});
