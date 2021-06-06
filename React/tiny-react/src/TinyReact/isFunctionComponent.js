import isFunction from "./isFunction";

export default function isFunctionComponent(virtualDom) {
    const type = virtualDom.type;
    // 判断是否是函数组件。原型上不存在render方法 类组件一定会有render方法
    return type && isFunction(type) && !(type.property && type.property.render);
}