export default function updateTextNode(oldVirtualDOM, virtualDOM, oldDOM) {
    if (oldVirtualDOM.props.textContent !== virtualDOM.props.textContent) {
        // 更新DOM
        oldDOM.textContent = virtualDOM.props.textContent;
        // 更新真实DOM上的virtualDOM
        oldDOM._virtualDOM = virtualDOM;
    }
}