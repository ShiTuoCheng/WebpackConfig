/**
 * webpack 打包配置文件基类
 */

/*jshint esversion:6 */

const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // 入口
  entry: {
    index: './src/index.ts'
  },

  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].bundle.js'
  },

  //loader
  module: {
    rules: [
      // less、css
      {
        test: /^(.less|.css)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      // js
      {
        test: /^.js&$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: 'babal-loader'
      },
      //ts
      {
        enforce: 'pre',
        test: /^.ts$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: 'ts-loader'
      },
      // png,jpg
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      }
    ]
  },

  //module
  resolve: {

    extensions: ['.js', 'json', '.ts'],
    modules: [path.resolve(__dirname, 'node_modules'), // 指定当前目录下的 node_modules 优先查找
    'node_modules', // 如果有一些类库是放在一些奇怪的地方的，你可以添加自定义的路径或者目录
    ]
  },

  //plugin
  plugins: [
    new cleanWebpackPlugin('dist')
  ]
};