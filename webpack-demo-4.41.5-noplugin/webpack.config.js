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
