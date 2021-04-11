// new的原理需要清楚
// 1. new constructor 首先会创建一个空对象
// 2. 将空对象的__proto__指向构造函数的prototype
// 3. 将空对象绑定到构造函数的this上,构造函数的this指向的就是对象
// 注：构造函数内除了明确使用return 返回一个object的情况，总是返回this 也就是实例对象
function _new(constructor, ...params) {

    // 构造函数的参数
    let paramsArr = [...params];

    let obj = Object.create(constructor.prototype);

    // 将空对象绑定到构造函数的this上
    let context = constructor.apply(obj, paramsArr);

    // 如果构造函数内明确返回了一个object， 则返回该对象，否则返回实例对象obj
    return typeof context === 'object' && context !== 'null' ? context : obj;

}

function F(name) {
    this.name = name;
    return {
        name: this.name
    }
};

let obj = _new(F, 'wuxue');
console.log('obj: ', obj);

