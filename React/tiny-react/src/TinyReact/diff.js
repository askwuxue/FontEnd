import createDOMElement from './createDOMElement';
import mountElement from './mountElement';
import updateNodeElement from './updateNodeElement';
import updateTextNode from './updateTextNode';
import unmountNode from './unmountNode';
import diffComponent from './diffComponent';

export default function diff(virtualDOM, container, oldDOM) {
    // 旧virtualDOM,挂载在DOM元素的属性上
    const oldVirtualDOM = oldDOM && oldDOM._virtualDOM;
    // console.log(oldVirtualDOM);
    const oldComponent = oldDOM && oldDOM._virtualDOM.component;
    // 首次渲染
    if (!oldDOM) {
        // 挂载元素
        mountElement(virtualDOM, container)
        // 更新DOM元素
        // 类型不同
    } else if (virtualDOM.type !== oldVirtualDOM.type && typeof virtualDOM.type !== 'function') {
        // 新的DOM元素
        const newElement = createDOMElement(virtualDOM);
        // 节点替换
        oldDOM.parentNode.replaceChild(newElement, oldDOM);
        // 类型相同

        // 类型是组件
    } else if (typeof virtualDOM.type === 'function') {
        diffComponent(virtualDOM, oldComponent, oldDOM, container);
    } else if (oldVirtualDOM && oldVirtualDOM.type === virtualDOM.type) {
        // 文本类型节点
        if (virtualDOM.type === 'text') {
            // 更新文本类型节点内容
            updateTextNode(oldVirtualDOM, virtualDOM, oldDOM);
            // 更新节点属性
        } else {
            updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM);
        }

        // 1. 将拥有key属性的子元素存在对象中
        let hasKeyObject = {};
        let len = oldDOM.childNodes.length;
        for (let i = 0; i < len; i++) {
            let nodeElement = oldDOM.childNodes[i];
            // 元素节点 获取属性
            if (nodeElement.type === '1') {
                let key = nodeElement.getAttribute('key');
                // key 是否存在
                if (key) {
                    hasKeyObject[key] = nodeElement;
                }
            }
        }

        // hasKeyObject中是否存在key属性的结果 true 存在
        let hasKey = Object.keys(hasKeyObject).length !== 0;
        // 根据是否存在key，决定是够需要重新渲染
        if (hasKey) {
            // 2. 循环virtualDOM子元素 获取子元素的key属性
            virtualDOM.children.forEach((child, index) => {
                let key = child.props.key;
                if (key) {
                    // 获取key对应的元素
                    let domElement = hasKeyObject[key];
                    if (domElement) {
                        // 判断该元素的顺序是否符合要求
                        if (oldDOM.childNodes[index] && domElement !== oldDOM.childNodes[index]) {
                            // 将当前元素插入到旧DOM元素的当前元素的位置，也就是旧的DOM元素只是调整位置
                            oldDOM.insertBefore(domElement, oldDOM.childNodes[i]);
                        }
                    }
                }
            })
        } else {
            // 更新子元素
            console.log('virtualDOM----diff: ', virtualDOM);
            if (Array.isArray(virtualDOM.children)) {
                virtualDOM.children.forEach((child, index) => {
                    diff(child, oldDOM, oldDOM.childNodes[index]);
                })
            }

            if (Array.isArray(virtualDOM)) {
                virtualDOM.forEach((child, index) => {
                    diff(child, oldDOM, oldDOM.childNodes[index]);
                })
            }
        }

        // 删除节点
        let oldChildNode = oldDOM.childNodes;
        // 旧节点的子元素大于新节点的子元素
        if (oldChildNode.length > virtualDOM.children?.length || oldChildNode.length > virtualDOM?.length) {
            for (let i = oldChildNode.length - 1; i > virtualDOM.children.length - 1; i--) {
                // 卸载元素
                unmountNode(oldChildNode[i]);
            }
        }
    }
}