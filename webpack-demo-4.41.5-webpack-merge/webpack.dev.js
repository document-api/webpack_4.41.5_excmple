const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
module.exports = merge(common, {
     devtool: 'inline-source-map',
     devServer: {
       contentBase: './dist',
       hot: true
     },
     plugins: [
      new webpack.NamedModulesPlugin(), // webpack自带的插件 以便查看修补patch依赖
      new webpack.HotModuleReplacementPlugin()
    ]
});