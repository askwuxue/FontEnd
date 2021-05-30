define(["require", "exports", "./module"], function (require, exports, module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function test(a, b) {
        return a + b;
    }
    console.log(module_1.a);
    var pro = new Promise(function (resolve, reject) {
        resolve('1');
    });
    console.log(pro);
});
