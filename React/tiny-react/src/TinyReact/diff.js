import mountElement from './mountElement';

export default function diff(virtualDom, container, oldDom) {
    // 判断oldDOM 是否存在
    if (!oldDom) {
        // 挂载元素
        mountElement(virtualDom, container)
    } else {

    }
}