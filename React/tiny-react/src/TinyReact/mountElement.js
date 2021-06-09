import mountNativeElement from './mountNativeElement';
import isFunction from './isFunction';
import mountComponent from './mountComponent';

export default function mountElement(virtualDOM, container, oldDOM) {
    // 组件形式的JSX
    if (isFunction(virtualDOM)) {
        mountComponent(virtualDOM, container, oldDOM);
        // 原生JSX
    } else {
        mountNativeElement(virtualDOM, container, oldDOM);
    }
}