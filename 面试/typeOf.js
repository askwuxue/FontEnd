// 实现typeOf toString方法的使用  
function typeOf(type) {
    let res = Object.prototype.toString.call(type).split('')[1];
    res = res.substring(0, res.length - 1);
    return res;
}

typeOf(new Date());
console.log('typeOf(new Date()): ', typeOf(new Date()));