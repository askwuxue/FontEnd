import { a } from './examples/module';
function test(a: number, b: number): number {
    return a + b;
}

console.log(a);
const pro = new Promise((resolve, reject) => {
    resolve('1');
});
console.log(pro);
