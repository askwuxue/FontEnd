// 实现多维数组的拉平排序
// ES5
let arr = [
    [1, 2, 4], 3, 5, [6, [3, 7]]
]

function flatten(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i])
        }
    }
    return result;
}

console.log('function flatten(arr): ', flatten(arr));

// ES6 实现数组拉平 去重 排序
let newArray = [...new Set(arr.flat(Infinity))].sort((value1, value2) => value1 - value2);
console.log('newArray: ', newArray);