// webpack的入口文件 /src/index.js
import test from './app'

// 开发环境打包
// webpack .\src\index.js -o .\build\build.js --mode=development

// 线上环境打包 会将入口文件压缩
// webpack .\src\index.js -o .\build\build.js --mode=production

// webpack 默认只支持打包.js .json 对与.css img 等资源不支持，需要借助loader和plugins实现
import data from '../public/data.json';
import '../public/app.css';
import '../public/test.less';
import './loader.md';

const { a, b } = data;
// console.log(c);

test(a, b);