import mountElement from './mountElement';
import updateNodeElement from './updateNodeElement';

export default function createDOMElement(virtualDOM) {
    // 生成真实DOM
    let newElement = null;
    // 1. 文本节点
    if (virtualDOM.type === 'text') {
        newElement = document.createTextNode(virtualDOM.props.textContent);
    } else {
        newElement = document.createElement(virtualDOM.type);
        // 为元素添加属性
        updateNodeElement(newElement, virtualDOM);
    }

    // 给DOM元素添加_virtualDOM属性
    newElement._virtualDOM = virtualDOM

    // 递归创建
    virtualDOM.children.forEach(child => {
        mountElement(child, newElement);
    });

    return newElement;
}