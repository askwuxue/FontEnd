import diff from './diff';

export default function render(virtualDom, container, oldDom) {
    diff(virtualDom, container, oldDom);
}