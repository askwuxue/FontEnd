const fs = require('fs');

// 使用回调函数的方式导致了嵌套过深的问题
const readFiles = () => {
    fs.readFile('./a.txt', 'utf8', data => {
        console.log('a.txt 调用完成');
        fs.readFile('./b.txt', 'utf8', data => {
            console.log('b.txt 调用完成');
            fs.readFile('./c.txt', 'utf8', data => {
            console.log('c.txt 调用完成');
                fs.readFile('./d.txt', 'utf8', data => {
                console.log('d.txt 调用完成');
                })
            })
        })
    })
}
// 异步函数返回结果不一定不是按照顺序执行
// const readFiles = () => {
//     fs.readFile('./a.txt', 'utf8', data => {
//         console.log('a.txt 调用完成');
//     })
//     fs.readFile('./b.txt', 'utf8', data => {
//             console.log('b.txt 调用完成');
//     })
//     fs.readFile('./c.txt', 'utf8', data => {
//             console.log('c.txt 调用完成');
//     })
//     fs.readFile('./d.txt', 'utf8', data => {
//             console.log('d.txt 调用完成');
//     })
// }


readFiles();

