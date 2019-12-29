const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');// 最新的引用方式，老式的会报错 CleanWebpackPlugin is not a constructor
module.exports = { // HMR模块热加载，去掉print.js因为index.js中引用了print.js
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),// 最新写法
    new HtmlWebpackPlugin({ // 动态生成index.html覆盖原来的index.html
      title: 'Output Management from dragon'
    })
  ],
  module: {
    rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
    ]
  },
  output: {
    filename: '[name].bundle.js', // 这里的name动态的循环遍历entry的名字
    path: path.resolve(__dirname, 'dist')
  }
};
