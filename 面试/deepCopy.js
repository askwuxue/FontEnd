// TODO 下面注释的代码功能实现了，但是不是深拷贝
// function deepCopy(newObj, oldObj) {
//     for (let key in oldObj) {
//         console.log(oldObj[key]);
//         if (oldObj[key] instanceof Array) {
//             newObj[key] = [];
//             deepCopy(newObj[key], oldObj[key]);
//         } else if (oldObj[key] instanceof Object) {
//             newObj[key] = {};
//             deepCopy(newObj[key], oldObj[key]);
//         }
//         newObj[key] = oldObj[key];
//     }
//     return newObj;
// }

// let oldObj = { name: 'wu', hobbies: ['a', 'b'], json: {a: "1", b: "2"} };

// let newObj = {};

// // deepCopy(newObj, oldObj); 
// // console.log('deepCopy(newObj, oldObj): ', deepCopy(newObj, oldObj));

// let target = deepCopy(newObj, oldObj);

// target.json.b = "3";

// console.log('oldObj: ', oldObj);

function deepCopy(obj) {
    
    // 如果传递的参数不是引用数组类型，直接返回
    if (typeof obj !== 'object') return obj;
 
    const newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {

        // 如果key是obj实例上的属性
        if (obj.hasOwnProperty(key)) {

            // 如果当前属性的属性值为引用类型，则递归，否则直接赋值
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        
        }

    }

    return newObj;
}

let oldObj = { name: 'wu', hobbies: ['a', 'b'], json: {a: "1", b: "2"} };

let newObj = deepCopy(oldObj);

newObj.json.a = '3';

console.log(oldObj);
