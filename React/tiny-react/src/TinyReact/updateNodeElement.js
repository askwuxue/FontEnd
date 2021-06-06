export default function updateNodeElement(newElement, virtualDom) {
    let newProps = virtualDom.props;
    Object.keys(newProps).forEach(propsName => {
        // 获取属性值
        let propsValue = newProps[propsName];
        // 事件处理函数
        if (propsName.startsWith('on')) {
            // 事件名
            const eventName = propsName.slice(2).toLowerCase();
            newElement.addEventListener(eventName, propsValue);
            // 属性名是value 或者checked无法通过setAttribute设置
        } else if (propsName === 'value' || propsName === 'checked') {
            newElement[propsName] = propsValue;
            // 如果属性不是children
        } else if (propsName !== 'children') {
            // 如果是className转换成DOM属性时为class 
            if (propsName === 'className') {
                newElement.setAttribute('class', propsValue);
            } else {
                newElement.setAttribute(propsName, propsValue);
            }
        }
    })
}