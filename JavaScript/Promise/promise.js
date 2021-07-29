const MyPromise = require('./MyPromise');

let promise = new MyPromise((resolve, reject) => {
    // resolve('成功');
    setTimeout(() => {
        resolve('成功');
    }, 2000);
    // reject('失败的原因');
})

promise.then(value => {
    console.log(1)
    console.log(value)
}, reason => {
    console.log(1)
    console.log(reason);
})
promise.then(value => {
    console.log(2)
    console.log(value)
}, reason => {
    console.log(2)
    console.log(reason);
})
promise.then(value => {
    console.log(3)
    console.log(value)
}, reason => {
    console.log(3)
    console.log(reason);
})
promise.then(value => {
    console.log(4)
    console.log(value)
}, reason => {
    console.log(4)
    console.log(reason);
})