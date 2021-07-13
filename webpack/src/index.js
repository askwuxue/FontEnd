// webpack的入口文件 /src/index.js
// import test from './app'

// 开发环境打包
// webpack .\src\index.js -o .\build\build.js --mode=development

// 线上环境打包 会将入口文件压缩
// webpack .\src\index.js -o .\build\build.js --mode=production

// webpack 默认只支持打包.js .json 对与.css img 等资源不支持，需要借助loader和plugins实现
// import data from '../public/data.json';
// import '../public/app.css';
// import '../public/test.less';
// import './loader.md';
// import hmr from './hrm';

// const { a, b } = data;
// console.log('a: ', a);
// console.log('b: ', b);
// console.log('js: hrm');
// alert('refresh');
// console.log(API_BASE_URL);

// module.hot.accept('./hrm', () => {
//     const hrsss = new hmr();
//     hrsss.fn();
//     console.log('module 更新了，这里需要手动处理热替换逻辑')
// })

// 引入部分组件
import { Button } from './component/component';
document.body.appendChild(Button());

// test(a, b);