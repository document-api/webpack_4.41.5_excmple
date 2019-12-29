import _ from 'lodash';
import printMe from './print.js';
import './styles.css';
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
// 当print发生变化时实时加载
if (module.hot) {
    module.hot.accept('./print.js', function() {
       console.log('Accepting the updated printMe module!');
       printMe();
    });
}