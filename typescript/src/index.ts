import { c } from './module/c';
let a = 1;
function demo(num: number | string):void {
    console.log(num);
    console.log(num + 'demo1');
    console.log(c)
}
demo(1);