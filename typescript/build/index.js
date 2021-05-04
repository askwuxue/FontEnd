define("module/c", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.c = void 0;
    // TODO 使用export导出的必须使用大括号来接受，使用export default的不使用大括号来接收
    exports.c = 3;
});
define("index", ["require", "exports", "module/c"], function (require, exports, c_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var a = 1;
    function demo(num) {
        console.log(num);
        console.log(num + 'demo1');
        console.log(c_1.c);
    }
    demo(1);
});
