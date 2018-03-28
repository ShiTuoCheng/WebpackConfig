/**
 * webpack 打包配置文件生产环境
 */

/*jshint esversion:6 */
const merge = require('webpack-merge');
const webpackBase = require('./webpack.base.config');

module.exports = merge(webpackBase,{
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
});