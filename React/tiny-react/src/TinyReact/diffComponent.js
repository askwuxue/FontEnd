import mountElement from "./mountElement";
import updateComponent from './updateComponent';

export default function diffComponent(virtualDOM, oldComponent, oldDOM, container) {
    // 是同一个组件
    if (isSameComponent(virtualDOM, oldComponent)) {
        updateComponent(virtualDOM, oldComponent, oldDOM, container);
        // 不是同一个组件
    } else {
        // 渲染新组件到container，并且删除旧组件
        mountElement(virtualDOM, container, oldDOM);
    }
}

// 判断两个组件是否相同
function isSameComponent(virtualDOM, oldComponent) {
    return oldComponent && virtualDOM.type === oldComponent.constructor;
}