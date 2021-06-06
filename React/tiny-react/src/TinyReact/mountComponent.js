import isFunction from "./isFunction";
import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from './mountNativeElement';

export default function mountComponent(virtualDom, container) {
    let nextVirtualDOM = null;
    // 1. 函数组件
    if (isFunctionComponent(virtualDom)) {
        nextVirtualDOM = buildFunctionComponent(virtualDom);
        // 组件中返回了另一个组件,进行递归
        if (isFunction(nextVirtualDOM)) {
            mountComponent(nextVirtualDOM, container);
        } else {
            mountNativeElement(nextVirtualDOM, container);
        }
        // 2. 类组件
    } else {
        console.log('类组件');
    }
}

function buildFunctionComponent(virtualDom) {
    // 组件的内容
    // console.log('组件的内容: ' + JSON.stringify(virtualDom.type({})));
    // 为组件添加props，这里时函数组件
    return virtualDom.type(virtualDom.props || {});
}