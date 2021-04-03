// 实现数组去重
// ES5实现 使用Array的filter方法实现，如果第一个元素的索引刚好是filter的默认索引则返回该元素
let arr = [1, 2, 2, 3, 4, 4];

let newArray = arr.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
})

// ES6实现 使用ES的数据结构Set
let newArray2 = [...new Set(arr)];