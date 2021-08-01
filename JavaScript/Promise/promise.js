const MyPromise = require('./MyPromise');

let promise = new MyPromise((resolve, reject) => {
    // resolve('成功');
    // throw new Error('executor error');
    // setTimeout(() => {
    //     resolve('成功');
    // }, 2000);
    reject('失败的原因');
})

promise.then().then().then(value => {
    console.log(value)
}, err => {
    console.log(err);
})

// const others = new MyPromise((resolve, reject) => {
//     resolve('others Promise')
// })

// let p1 = promise.then(value => {
//     console.log(value)
//     // throw new Error('then error')
//     // return 100;
//     // return p1
//     return 'aaa';
// }, (error) => {
//     console.log(error);
//     return 10000;
// })
// p1.then((value) => {
//     console.log(value)
// }, reason => {
//     console.log(reason.message)
// })
// p1.then(value => {
//      console.log(value)
//      return others;
//      // console.log(value)
//  }).then(value => {
//      console.log(value);
//  })
// promise.then(value => {
//     console.log(value)
//     // console.log(value);
//     return value;
// }, reason => {
//     console.log(value)
//     console.log(reason);
// }).then(value => {
//     console.log(value)
//     // console.log(value)
// }, reason => {
//     console.log(value)
//     console.log(reason);
// })