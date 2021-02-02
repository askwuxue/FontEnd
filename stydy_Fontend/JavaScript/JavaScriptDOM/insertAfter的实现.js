function insertAfter(parent ,newElement, targetElement) {
    // 如果要插入的位置在最后一个子元素的后面
    if(parent.lastChild === targetElement) {
        parent.appendChild(newElement);
    } else {
        // 插入到目标元素的下一个兄弟元素的钱满
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}