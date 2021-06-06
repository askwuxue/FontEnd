import mountElement from './mountElement';

export default function diff(virtualDom, container, oldDom) {
    // 判断oldDOM 是否存在
    if (!oldDom) {
        mountElement(virtualDom, container)
    }
}