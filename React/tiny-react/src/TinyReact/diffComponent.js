import mountElement from "./mountElement";

export default function diffComponent(virtualDOM, oldComponent, oldDOM, container) {
    // 是同一个组件
    if (isSameComponent(virtualDOM, oldComponent)) {
        console.log('同一个组件');
        // 不是同一个组件
    } else {
        console.log('不是同一个组件');
        // 渲染新组件到container，并且删除旧组件
        mountElement(virtualDOM, container, oldDOM);
    }
}

// 判断两个组件是否相同
function isSameComponent(virtualDOM, oldComponent) {
    return oldComponent && virtualDOM.type === oldComponent.constructor;
}