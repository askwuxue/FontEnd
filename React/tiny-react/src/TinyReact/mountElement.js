import mountNativeElement from './mountNativeElement';
import isFunction from './isFunction';
import mountComponent from './mountComponent';

export default function mountElement(virtualDom, container) {
    // 组件形式的JSX
    if (isFunction(virtualDom)) {
        mountComponent(virtualDom, container);
        // 原生JSX
    } else {
        mountNativeElement(virtualDom, container);
    }
}