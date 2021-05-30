"use strict";
function fun1(a) {
    return a;
}
console.log(fun1(24));
var M = /** @class */ (function () {
    function M() {
        this.lenght = 23;
    }
    return M;
}());
// 当前的泛型必须是实现L接口的类或者是L的子类
function fun2(a) {
    return a;
}
var m = new M();
console.log(fun2(m));
// 当前的泛型必须是实现L接口的类或者是L的子类
function fun3(a) {
    return a;
}
console.log(fun3('abs'));
