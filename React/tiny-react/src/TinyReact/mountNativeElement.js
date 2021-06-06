import createDOMElement from './createDOMElement';

export default function mountNativeElement(virtualDom, container) {
    let newElement = createDOMElement(virtualDom);
    // 将创建好的元素放入container
    container.append(newElement);
}
