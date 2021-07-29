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

    // resolve接受成功的值
    resolve = value => {
        // 如果当前状态不是pending 则状态已经确定
        if (this.status !== PENDING) return
        this.status = FULFILLED;
        this.value = value;
    }

    // reject接受失败的原因
    reject = reason => {
        // 如果当前状态不是pending 则状态已经确定
        if (this.status !== PENDING) return
        this.status = REJECTED
        this.reason = reason;
    }

    // 执行Promise对象的then方法
    then = (successCallBack, failCallBack) => {
        successCallBack(this.value);
        failCallBack(this.reason);
    }
}

module.exports = MyPromise;