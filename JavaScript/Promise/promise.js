const MyPromise = require('./MyPromise');

let promise = new MyPromise((resolve, reject) => {
    resolve('成功');
    // setTimeout(() => {
    //     resolve('成功');
    // }, 2000);
    // reject('失败的原因');
})

const others = new MyPromise((resolve, reject) => {
    resolve('others Promise')
})

let p1 = promise.then(value => {
    console.log(value)
    // console.log(value)
    // return 100;
    return p1
})
p1.then((value) => {
    console.log(value)
}, reason => {
    console.log(reason)
})
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