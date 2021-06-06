// JSX 转 JavaScript
// 调用TinyReact的createElement会将JSX代码转成一个对象。该对象上注册了，元素的type，props，以及children
// 可以打开 babelREPL 加入 // @jsx TinyReact.createElement 观察解析后的JavaScript代码
export default function createElement(type, props, ...children) {
    // children可能包含多个子节点
    // 如reduce的第二个参数将作为第一个参数函数调用的第一个参数
    const childElement = [...children].reduce((result, child) => {
        // 对于true，false， undefined，null等值， React不进行渲染
        if (child !== true && child !== false && child !== undefined && child !== null) {
            if (child instanceof Object) {
                result.push(child)
                // 文本节点
            } else {
                result.push(createElement('text', { textContent: child }));
            }
        }
        return result;
    }, [])
    return {
        type,
        // React的props.children属性
        props: Object.assign({ children: childElement }, props),
        children: childElement
    }
}