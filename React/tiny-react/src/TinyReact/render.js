import diff from './diff';

/* 
virtualDom: JSX，函数组件或类组件
container: 页面容器位置
oldDom: 旧VirtualDOM
*/
export default function render(virtualDom, container, oldDom) {
    // 渲染之前，新旧VirtualDOM要进行比较
    diff(virtualDom, container, oldDom);
}