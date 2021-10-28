let obj = { name: 'wu', hobbies: ['a', 'b'] };

function shallowCopy(obj) {
    if (typeof(obj) !== 'object') return obj;

    // 判断obj 是否是Array的一个实例,不是则是Object的实例
    let newObj = obj instanceof Array ? [] : {};

    // 将obj自身的属性赋值给newObj
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

function shallowCopy2(obj) {
    if (typeof(obj) !== 'object') return obj;
    // 判断obj 是否是Array的一个实例,不是则是Object的实例
    let newObj = obj instanceof Array ? [] : {};

    // obj.keys() 返回自身除了 Symbol类型的所有属性
    for (let key of Object.keys(obj)) {
        newObj[key] = obj[key];
    }
    return newObj;
}

// 浅拷贝是引用拷贝源修改后 拷贝后的内容也会修改
obj.hobbies.push('c');
console.log('shallowCopy: ', shallowCopy(obj));
console.log('shallowCopy2: ', shallowCopy2(obj));