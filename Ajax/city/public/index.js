// TODO import 导入普通变量时 必须使用 {}
import { ajax } from './ajax.js';
import { a } from './ajax.js';
const main = () => {
    // import ajax from './ajax.js';
    console.log('js start....');
    console.log('ajax: ' + ajax);
    console.log('a: ' + a);
}

addEventListener('DOMContentLoaded', main);