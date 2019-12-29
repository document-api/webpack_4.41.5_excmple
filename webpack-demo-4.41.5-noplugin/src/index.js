import _ from 'lodash';
import printMe from './print.js';
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button'); // 创建一个按钮
  element.innerHTML = _.join(['Hello', 'webpack form dargon'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe; // 增加一个点击事件
  element.appendChild(btn); // 按钮放入div中
  return element;
}

document.body.appendChild(component());

