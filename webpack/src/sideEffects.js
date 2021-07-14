export const sideEffects = function () {
    console.log('这是一个有副作用的模块');
    return document.createElement('div');
}