export default function isFunction(virtualDom) {
    // 类组件和函数组件都会返回true
    return virtualDom && typeof virtualDom.type === 'function';
}