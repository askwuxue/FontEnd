import mountNativeElement from './mountNativeElement';
import isFunction from './isFunction';
import mountComponent from './mountComponent';

export default function mountElement(virtualDom, container) {
    // 两种不同的元素，一种是组件形式的，一种是原生的JSX形式
    // component
    if (isFunction(virtualDom)) {
        // console.log('组件');
        mountComponent(virtualDom, container);
        // NativeElement
    } else {
        mountNativeElement(virtualDom, container);
    }
}