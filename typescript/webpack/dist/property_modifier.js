"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// TODO 抽象类智能被继承，不会被实例化
var A = /** @class */ (function () {
    // name: string;
    // age: number;
    // 定义属性并且对属性进行初始化
    function A(name) {
        this.name = name;
        this.name = name;
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(name, age) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.age = age;
        _this.showInfo();
        _this.age = 18;
        return _this;
    }
    Object.defineProperty(B.prototype, "_age", {
        get: function () {
            return this.age;
        },
        set: function (_age) {
            this.age = _age;
        },
        enumerable: false,
        configurable: true
    });
    B.prototype.showInfo = function () {
        if (this.age > 18) {
            console.log('已经成年');
        }
        else {
            console.log('还没有成年');
        }
    };
    return B;
}(A));
var b = new B('wuxue', 25);
console.log(b.name);
b.name = 'xiaoNing';
// b.age = 18;
// 通过get和set对属性进行访问和修改 
b._age = 18;
console.log(b._age);
