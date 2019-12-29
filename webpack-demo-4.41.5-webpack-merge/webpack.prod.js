const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');


 module.exports = merge(common, {
  //  devtool: 'inline-source-map',
  //  devtool: 'source-map', // 保证源码的阅读 生产环境性能影响不是很大 避免用开发环境的line开头的
   plugins: [
     new UglifyJSPlugin(),
     new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production') // 定义依赖变量
    })
   ]
});