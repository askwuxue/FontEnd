const getSum = function (a, b, c) {
    return a + b + c
}

const curry = function (fun) {
    return function curred(...args) {
        // 判断函数实参小于形参个数
        if (args.length < fun.length) {
            return function () {
                return curred(...args.concat(Array.from(arguments)));
            }
        }
        // 参数传递数量大于形参数量
        return fun(...args);
    }
}

const curried = curry(getSum);

console.log(curried(1)(2)(3));
