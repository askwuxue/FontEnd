// 为生成的DOM元素添加属性
export default function updateNodeElement(newElement, virtualDom, oldVirtualDOM = {}) {
    const newProps = virtualDom.props || {};
    const oldProps = oldVirtualDOM.props || {};
    Object.keys(newProps).forEach(propsName => {
        // 获取属性值
        const newPropsValue = newProps[propsName];
        const oldPropsValue = oldProps[propsName];
        // 更新
        if (newPropsValue !== oldPropsValue) {
            // 事件处理函数
            if (propsName.startsWith('on')) {
                // 事件名
                const eventName = propsName.slice(2).toLowerCase();
                newElement.addEventListener(eventName, newPropsValue);
                // 删除原有事件处理函数
                if (oldPropsValue) {
                    newElement.removeEventListener(eventName, oldPropsValue);
                }
                // 属性名是value 或者checked无法通过setAttribute设置
            } else if (propsName === 'value' || propsName === 'checked') {
                newElement[propsName] = newPropsValue;
                // 如果属性不是children
            } else if (propsName !== 'children') {
                // 如果是className转换成DOM属性时为class 
                if (propsName === 'className') {
                    newElement.setAttribute('class', newPropsValue);
                } else {
                    newElement.setAttribute(propsName, newPropsValue);
                }
            }
        }
    })

    // 判断属性被删除
    Object.keys(oldProps).forEach(propsName => {
        const newPropsValue = newProps[propsName];
        const oldPropsValue = oldProps[propsName];
        // 属性被删除
        if (!newPropsValue) {
            // 事件处理属性
            if (propsName.startsWith('on')) {
                const eventName = propsName.toLowerCase().slice(2);
                newElement.removeEventListener(eventName, oldPropsValue);
                // 属性删除 
            } else if (propsName !== 'children') {
                newElement.removeAttribute(propsName);
            }
        }
    })
}