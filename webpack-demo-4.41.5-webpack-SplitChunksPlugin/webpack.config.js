const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');// 最新的引用方式，老式的会报错 CleanWebpackPlugin is not a constructor

module.exports = { // HMR模块热加载，去掉print.js因为index.js中引用了print.js
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',// 打包后，浏览器报错时会提示所在的单文件和行数，有助于调试定位问题
  devServer: {
    contentBase: './dist', // 动态监测变化
    hot: true
  },
  module: {
  rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),// 最新写法
    new HtmlWebpackPlugin({ // 动态生成index.html覆盖原来的index.html
      title: 'Output Management from dragon'
    }),
    new webpack.NamedModulesPlugin(), // webpack自带的插件 以便查看修补patch依赖
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: { // 拆分代码 提取公用的引用包
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial', // initial初始块 async按需加载 all所有
          minChunks: 1 // 引用的最小个数
        }
      }
    }
  },
  output: {
    filename: '[name].bundle.js', // 这里的name动态的循环遍历entry的名字
    path: path.resolve(__dirname, 'dist')
  }
};
