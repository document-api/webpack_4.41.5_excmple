## 管理输出
到目前为止，我们在 index.html 文件中手动引入所有资源，然而随着应用程序增长，并且一旦开始对文件名使用哈希(hash)]并输出多个 bundle，手动地对 index.html 文件进行管理，一切就会变得困难起来。然而，可以通过一些插件，会使这个过程更容易操控。
## 第一个插件
### html-webpack-plugin
解决的问题
入口发生改变，index.html文件引用的js无法动态的发生变换，只能手动的改，很不方便，所以引用此插件进行自动化构建管理
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = { // 多个文件同时打包,生成多个对应的包
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new HtmlWebpackPlugin({ // 动态生成index.html覆盖原来的index.html
      title: 'Output Management from dragon'
    })
  ],
  output: {
    filename: '[name].bundle.js', // 这里的name动态的循环遍历entry的名字
    path: path.resolve(__dirname, 'dist')
  }
};
```
## 第二个插件
### clean-webpack-plugin
解决的问题
构建前清理 /dist 文件夹
安装：
```js
npm install clean-webpack-plugin --save-dev
```
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');// 最新的引用方式，老式的会报错 CleanWebpackPlugin is not a constructor

module.exports = { // 多个文件同时打包,生成多个对应的包
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(),// 最新写法
    new HtmlWebpackPlugin({ // 动态生成index.html覆盖原来的index.html
      title: 'Output Management from dragon'
    })
  ],
  output: {
    filename: '[name].bundle.js', // 这里的name动态的循环遍历entry的名字
    path: path.resolve(__dirname, 'dist')
  }
};
```
## Mainfest
解决问题
模块映射到输出 bundle 的过程，保持追踪（解决缓存性能优化的问题）