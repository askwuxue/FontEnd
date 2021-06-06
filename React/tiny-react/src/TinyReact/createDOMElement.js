import mountElement from './mountElement';
import updateNodeElement from './updateNodeElement';

export default function createDOMElement(virtualDom) {
    // 生成真实DOM
    let newElement = null;
    // 1. 文本节点
    if (virtualDom.type === 'text') {
        newElement = document.createTextNode(virtualDom.props.textContent);
    } else {
        newElement = document.createElement(virtualDom.type);
        // 为元素添加属性
        updateNodeElement(newElement, virtualDom);
    }

    // 递归创建
    virtualDom.children.forEach(child => {
        mountElement(child, newElement);
    });

    return newElement;
}