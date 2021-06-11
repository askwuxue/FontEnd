import mountElement from './mountElement';
import updateNodeElement from './updateNodeElement';

export default function createDOMElement(virtualDOM) {
    console.log('virtualDOM: ', virtualDOM);

    // 生成真实DOM
    let newElement = null;
    if (virtualDOM.type === 'text') {
        // 1. 文本节点
        newElement = document.createTextNode(virtualDOM.props.textContent);
    } else {
        // 元素节点
        newElement = document.createElement(virtualDOM.type);
        // 为元素添加属性
        updateNodeElement(newElement, virtualDOM);
    }

    // 给DOM元素添加_virtualDOM属性
    newElement._virtualDOM = virtualDOM

    // 递归创建
    // virtualDOM.children?.forEach(child => {
    //     mountElement(child, newElement);
    // });
    if (Array.isArray(virtualDOM)) {
        virtualDOM.forEach(child => {
            mountElement(child, newElement);
        });
    }

    // TODO 在JSX中使用map 动态渲染，返回了数组，需要特别处理
    if (Array.isArray(virtualDOM.children)) {
        virtualDOM.children.forEach(child => {
            mountElement(child, newElement);
        });
    }

    // 元素的ref属性处理
    if (virtualDOM.props && virtualDOM.props.ref) {
        // ref函数接受参数为当前元素
        virtualDOM.props.ref(newElement);
    }

    return newElement;
}