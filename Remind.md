# 前言
不讲概念性的东西，直接进入实战开发，目的让你在实践中领悟，然后再去理解概念，会事半功倍，减轻阅读成本和心理压力。为了阅读脉络更清晰，我会从3W1H原则去行文。
- what --------做什么 
- who --------谁来做 
- when--------什么时候做 
- how---------怎么做)
# 背景
2019最后一篇技术文章，也是webpack4.41.5的最新落地版本，希望这篇文章能够让你真正的会用webpack4.0+，然后根据自己的理解和官网的文章、参照其他概念性的文章进阶，下面我们就一起动手实现我们的webpack脚手架吧，一起跨越2019迎接2020。
# 简单定义
本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。
上面如果你不知道什么意思，没关系，我们直接进入实战，跟着本文亲手做一遍，或者所有的demo下载到本地跑一遍，你就理解了，如果还是不理解欢迎骚扰，文后关注我，后续解答。
# 实战
## npx webpack打包
- what: 打包资源
- who: npx
- when: 执行npx webpack脚本打包资源的时候
- how: 当前项目命令工具下执行 npx webpack
项目地址: [webpack-demo-4.41.5-npx-webpack](https://github.com/document-api/webpack_4.41.5_excmple/tree/master/webpack-demo-4.41.5-npx-webpack)
## 配置webpack打包
- what: 配置的方式打包资源
- who: package.json下script中配置命令行
- when: 运行npm run build的时候，打包资源的时候
- how: 
```js
"scripts": {
    "build": "webpack"
}
```
项目地址: [webpack-demo-4.41.5-loader-css](https://github.com/document-api/webpack_4.41.5_excmple/tree/master/webpack-demo-4.41.5-loader-css)
## 打包资源（css、img、font、其他文件）
- what: 打包文件资源
- who: loader模块
- when: 在webpack执行文件webpack.config.js中配置，打包资源的时候
- how: 
```js
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
```
项目地址: [webpack-demo-4.41.5-loader-png-font-text](https://github.com/document-api/webpack_4.41.5_excmple/tree/master/webpack-demo-4.41.5-loader-png-font-text)
## 手动配置文件打包
- what: 手动配置多文件打包
- who: 在入口文件index.html中写死打包后的文件名
- when: 在webpack.config.js中配置输出文件，执行打包输出的时候
- how: 
```js
// webpack.config.js
const path = require('path');
module.exports = { // 多个文件同时打包,生成多个对应的包
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js', // 这里的name动态的循环遍历entry的名字
    path: path.resolve(__dirname, 'dist')
  }
};
// index.html src根据entry中手动配置
<!doctype html>
<html>
  <head>
    <title>Output Management</title>
    <script src="./print.bundle.js"></script>
  </head>
  <body>
    <script src="./app.bundle.js"></script>
  </body>
</html>
```
项目地址: [webpack-demo-4.41.5-noplugin](https://github.com/document-api/webpack_4.41.5_excmple/tree/master/webpack-demo-4.41.5-noplugin)
```!
问题来了，手动配置如果entry中文件配置名发生变化或删掉多个入口，index.html
```
## 插件打包
- what: 利用插件进行自动化打包输出文件
- who: 在入口文件index.html中写死打包后的文件名
- when: 在webpack.config.js中配置输出文件，执行打包输出的时候
- how: 
```js

```
项目地址: [webpack-demo-4.41.5-plugins](https://github.com/document-api/webpack_4.41.5_excmple/tree/master/webpack-demo-4.41.5-plugins)
## 热加载HMR
项目地址: [webpack-demo-4.41.5-dev-HMR](https://github.com/document-api/webpack_4.41.5_excmple/tree/master/webpack-demo-4.41.5-dev-HMR)
## 环境分离配置
项目地址: [webpack-demo-4.41.5-dev-HMR](https://github.com/document-api/webpack_4.41.5_excmple/tree/master/webpack-demo-4.41.5-dev-HMR)
## 多环境合并
项目地址: [webpack-demo-4.41.5-webpack-merge](https://github.com/document-api/webpack_4.41.5_excmple/tree/master/webpack-demo-4.41.5-webpack-merge)
## 拆分代码打包
项目地址: [webpack-demo-4.41.5-webpack-SplitChunksPlugin](https://github.com/document-api/webpack_4.41.5_excmple/tree/master/webpack-demo-4.41.5-webpack-SplitChunksPlugin)
