function deepCopy(newObj, oldObj) {
    for (let key in oldObj) {
        console.log(oldObj[key]);
        if (oldObj[key] instanceof Array) {
            newObj[key] = [];
            deepCopy(newObj[key], oldObj[key]);
        } else if (oldObj[key] instanceof Object) {
            newObj[key] = {};
            deepCopy(newObj[key], oldObj[key]);
        }
        newObj[key] = oldObj[key];
    }
    return newObj;
}

let oldObj = { name: 'wu', hobbies: ['a', 'b'], json: {a: "1", b: "2"} };

let newObj = {};

// deepCopy(newObj, oldObj); 
// console.log('deepCopy(newObj, oldObj): ', deepCopy(newObj, oldObj));

let target = deepCopy(newObj, oldObj);

target.json.b = "3";

console.log('oldObj: ', oldObj);

