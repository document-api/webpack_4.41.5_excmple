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
## 使用source map
解决问题
打包后，浏览器报错时会提示所在的单文件和行数，有助于调试定位问题
## 自动编译代码（工具）
### webpack-dev-server
解决问题
代码发生变换时自动编译
```js
npm install --save-dev webpack-dev-server
```
webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)
接下来在webpack.config.js下配置devServer
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');// 最新的引用方式，老式的会报错 CleanWebpackPlugin is not a constructor
module.exports = { // 多个文件同时打包,生成多个对应的包
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',// 打包后，浏览器报错时会提示所在的单文件和行数，有助于调试定位问题
  devServer: {
    contentBase: './dist' // 动态监测变化
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
配置package.json
```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --open",
    "build": "webpack"
  }
```
接下来可以直接通过 npm run dev运行了
## 热模块加载HMR
### webpack自带的插件 
- NamedModulesPlugin 查看修补patch依赖
- HotModuleReplacementPlugin HMR
解决问题
模块修改，不需要每次都自动刷新整个页面，局部（模块）刷新
## 去重
### SplitChunksPlugin 
解决问题
打包输出去重代码或引用，减少代码体积，提高构建速度

```js
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
  }
```
