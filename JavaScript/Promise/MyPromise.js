const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    // Promise 对象接受一个执行器，会立即执行
    constructor(executor) {
        executor(this.resolve, this.reject)
    }

    // Promise的状态
    status = PENDING

    // resolve成功的值
    value = undefined;

    // reject失败的原因
    reason = undefined;

    // 存储成功的回调函数,因为可能会连续调用then方法，所以使用数组存储
    successCallBack = [];

    // 存储失败的回调函数，因为可能会连续调用then方法，所以使用数组存储
    failCallBack = [];

    // resolve接受成功的值
    resolve = value => {
        // 如果当前状态不是pending 则状态已经确定
        if (this.status !== PENDING) return
        this.status = FULFILLED;
        this.value = value;
        // 成功回调函数的执行。此时resolve函数已经执行
        // this.successCallBack && this.successCallBack(value);
        while (this.successCallBack.length) this.successCallBack.shift()(value);
    }

    // reject接受失败的原因
    reject = reason => {
        // 如果当前状态不是pending 则状态已经确定
        if (this.status !== PENDING) return
        this.status = REJECTED
        this.reason = reason;
        // 失败回调函数的执行。此时reject函数已经执行
        // this.failCallBack && this.failCallBack(reason);
        while (this.failCallBack.length) this.failCallBack.shift()(reason);
    }

    // 执行Promise对象的then方法
    then = (successCallBack, failCallBack) => {
        // 当前状态是fulfilled，执行成功回调
        if (this.status === FULFILLED) {
            successCallBack(this.value);
            // 当前状态是rejected，执行失败回调
        } else if (this.status === REJECTED) {
            failCallBack(this.reason);
            // 当前状态是padding, 如异步函数调用。此时resolve和reject都没有调用。暂时将成功和失败的回调存储。
        } else {
            this.successCallBack.push(successCallBack)
            this.failCallBack.push(failCallBack)
        }
    }
}

module.exports = MyPromise;