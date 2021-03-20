let arr = Array(100000000);
// for (let i = arr.length; i--; i) {
//     arr[i] = i;
// }

console.time('for-asc');
for (let i = 0; i < arr.length; i++) {}
console.timeEnd('for-asc');

console.time('for-desc');
for (let i = arr.length; i >= 0; i--) {}
console.timeEnd('for-desc');

// console.time('for');
// for (let i = arr.length; i >= 0; i--) {}
// let a = console.timeEnd('for');

// console.time('forEach');
// arr.forEach((v) => v)
// console.timeEnd('forEach');

// console.time('for-of');
// for (let key of arr) {}
// console.timeEnd('for-of');

// console.time('for-in');
// for (let key in arr) {}
// console.timeEnd('for-in');