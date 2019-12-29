import _ from 'lodash';
import './style.css';
import _icon from './imgs/2.png';
import Data from './data.xml';
import JSONData from './data.json'; // webpack默认加载
function component() {
  var element = document.createElement('div');

  // * Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // Lodash, now imported by this script  
  element.innerHTML = _.join(['Hello', 'webpack form dargon'], ' ');
  element.classList.add('contain'); // 添加class选择器

  var img = new Image();
  img.src = _icon;
  element.appendChild(img);
  console.log(Data);
  console.log('JSONData===', JSONData);
  return element;
}

document.body.appendChild(component());