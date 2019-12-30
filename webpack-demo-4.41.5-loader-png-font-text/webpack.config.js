const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
     rules: [
             {
               test: /\.css$/, // 加载样式，嵌入html页面中
               use: [
                 'style-loader',
                 'css-loader'
               ]
             },
             {
              test: /\.(png|svg|jpg|gif|jpeg)$/, // 加载图片
              use: [
                'file-loader'
              ]
             },
             {
              test: /\.(woff|woff2|eot|ttf|otf)$/, // 加载字体库
               use: {
                loader: "url-loader",
                options: {
                  limit: 50000
                }
               }
             },
             {
              test: /\.(csv|tsv)$/,// 加载数据 CSV TSV格式
                use: [
                'csv-loader'
              ]
              },
              {
                test: /\.xml$/, // 加载xml格式
                use: [
                'xml-loader'
                ]
              }
      ]
  }
};
