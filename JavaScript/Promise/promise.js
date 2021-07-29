const MyPromise = require('./MyPromise');

let promise = new MyPromise((resolve, reject) => {
    // resolve('成功');
    reject('失败的原因');
})

promise.then(value => {
    console.log(value)
}, reason => {
    console.log(reason);
})