const util = require('util');
const fs = require('fs');

// 将node的异步函数改造为一个Promise函数
const readFile = util.promisify(fs.readFile);
const readFile1 = () => {
        return readFile('./a.txt', 'utf8');
};

const readFile2 = () => {
       return readFile('./b.txt', 'utf8');
};

const readFile3 = () => {
        return readFile('./c.txt', 'utf8');
};

const readFile4 = () => {
        return readFile('./d.txt', 'utf8');
};

const run = async () => {
    let f1 = await readFile1();
    // console.log(f1);
    // console.log('a.txt read over');
    let f2 = await readFile2();
    let f3 = await readFile3();
    let f4 = await readFile4();
    console.log(f1);
    console.log(f2);
    console.log(f3);
    console.log(f4);
}
run();