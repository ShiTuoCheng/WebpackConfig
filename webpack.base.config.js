/**
 * webpack 打包配置文件基类
 */

/*jshint esversion:6 */

const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // 入口
  entry: {
    index: "./src/index.ts"
  },

  // 出口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:8].bundle.js",
    chunkFilename: "[name].[hash:8].js" // 指定分离出来的代码文件的名称
  },

  //loader
  module: {
    rules: [
      // less、css
      {
        test: /.(less|css)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true
              }
            },
            "less-loader"
          ]
        })
      },
      // js
      {
        test: /.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        use: "babel-loader"
      },
      //ts
      {
        enforce: "pre",
        test: /.ts$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        use: "ts-loader"
      },
      // png,jpg
      {
        test: /.(png|jpg|gif)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  },

  //module
  resolve: {
    alias: {
      css: path.resolve(__dirname, "src/css")
    },
    extensions: [".js", ".json", ".ts", ".less", ".css"],
    modules: [
      path.resolve(__dirname, "node_modules"), // 指定当前目录下的 node_modules 优先查找
      "node_modules" // 如果有一些类库是放在一些奇怪的地方的，你可以添加自定义的路径或者目录
    ]
  },

  //plugin
  plugins: [
    //每次构建清除dist文件夹
    new cleanWebpackPlugin("dist"),
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./src/views/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new ExtractTextPlugin("style.css")
  ]
};