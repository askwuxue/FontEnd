import isFunction from "./isFunction";
import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from './mountNativeElement';

export default function mountComponent(virtualDom, container) {
    let nextVirtualDOM = null;
    // 1. 函数组件
    if (isFunctionComponent(virtualDom)) {
        // console.log('函数组件');
        nextVirtualDOM = buildFunctionComponent(virtualDom);
        // 组件中返回了另一个组件
        if (isFunction(nextVirtualDOM)) {
            mountComponent(nextVirtualDOM, container);
        } else {
            mountNativeElement(nextVirtualDOM, container);
        }
        // 2. 类组件
    } else {
        // console.log('类组件');
        nextVirtualDOM = buildClassComponent(virtualDom);
        // 返回了另一个组件
        if (isFunction(nextVirtualDOM)) {
            mountComponent(nextVirtualDOM, container);
        } else {
            mountNativeElement(nextVirtualDOM, container);
        }
    }
}

// 编译函数组件
function buildFunctionComponent(virtualDom) {
    // 组件的内容
    // console.log('组件的内容: ' + JSON.stringify(virtualDom.type({})));
    // 为组件添加props，这里时函数组件
    return virtualDom.type(virtualDom.props || {});
}

// 编译类组件
function buildClassComponent(virtualDom) {
    // 创建实例 将props传递给类组件
    const component = new virtualDom.type(virtualDom.props);
    // 渲染DOM
    const nextVirtualDOM = component.render();
    return nextVirtualDOM;
    // console.log(virtualDom);
}