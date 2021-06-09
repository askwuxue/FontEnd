import createDOMElement from './createDOMElement';
import unmountNode from './unmountNode';

export default function mountNativeElement(virtualDOM, container, oldDOM) {
    // 已经存在旧的DOM元素，先删除，后渲染
    if (oldDOM) {
        unmountNode(oldDOM);
    }
    let newElement = createDOMElement(virtualDOM);
    // 将创建好的元素放入container
    container.append(newElement);
    // 取组件实例
    let component = virtualDOM.component;
    if (component) {
        // 实例对象调用setDOM,实际会调用父类上的setDOM
        component.setDOM(newElement);
    }
}
