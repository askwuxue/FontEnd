import createDOMElement from './createDOMElement';
import mountElement from './mountElement';
import updateNodeElement from './updateNodeElement';
import updateTextNode from './updateTextNode';
import unmountNode from './unmountNode';

export default function diff(virtualDOM, container, oldDOM) {
    // 旧virtualDOM,挂载在DOM元素的属性上
    const oldVirtualDOM = oldDOM && oldDOM._virtualDOM;
    // 首次渲染
    if (!oldDOM) {
        // 挂载元素
        mountElement(virtualDOM, container)
        // 更新DOM元素
        // 类型不同
    } else if (virtualDOM.type !== oldVirtualDOM.type && virtualDOM.type !== 'function') {
        // 新的DOM元素
        const newElement = createDOMElement(virtualDOM);
        // 节点替换
        oldDOM.parentNode.replaceChild(newElement, oldDOM);
        // 类型相同
    } else if (oldVirtualDOM && oldVirtualDOM.type === virtualDOM.type) {
        // 文本类型节点
        if (virtualDOM.type === 'text') {
            // 更新文本类型节点内容
            updateTextNode(oldVirtualDOM, virtualDOM, oldDOM);
            // 更新节点属性
        } else {
            updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM);
        }

        // 更新子元素
        virtualDOM.children.forEach((child, index) => {
            diff(child, oldDOM, oldDOM.childNodes[index]);
        })

        // 删除节点
        let oldChildNode = oldDOM.childNodes;
        // 旧节点的子元素大于新节点的子元素
        if (oldChildNode.length > virtualDOM.children.length) {
            for (let i = oldChildNode.length - 1; i > virtualDOM.children.length - 1; i--) {
                // 卸载元素
                unmountNode(oldChildNode[i]);
            }
        }
    }
}