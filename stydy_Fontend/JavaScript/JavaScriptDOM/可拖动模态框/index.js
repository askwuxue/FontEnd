window.addEventListener('DOMContentLoaded', mainFn);
function mainFn() {
    var tille = document.querySelector('.title');
    var closeBtn = document.querySelector('.close-link');
    var logonBox = document.querySelector('.logon');

    // 鼠标按下
    tille.addEventListener('mousedown', dragFn);
    
    // 鼠标移动
    function moveFn(e) {
        // 鼠标相对于页面的位置
        var mousePageTop = e.pageY;
        var mousePageLeft = e.pageX;
        // logon相对于页面的位置 相对于定位的父级元素的位置  没有的话ji  HTML 
        var logonTop = logonBox.offsetTop - logonBox.offsetHeight / 2;
        var logonLeft = logonBox.offsetLeft - logonBox.offsetWidth / 2;
        var currentX = mousePageLeft - logonLeft;
        var currentY = mousePageTop - logonTop;
        // logonBox.style.left = (mousePageLeft - currentX) + 'px';
        // logonBox.style.top = (mousePageTop - currentY) + 'px';
        // console.log(fatherLeft, fatherTop)
        // console.log(mousePageLeft, mousePageTop);
        console.log(e.pageX, e.pageY);
        console.log(currentX, currentY)
        console.log(logonLeft, logonTop);
        // console.log(logonBox.offsetLeft - logonBox.offsetWidth/2, logonBox.offsetTop - logonBox.offsetHeight / 2)
    }
    // 拖动函数
    function dragFn(e) {
        // 鼠标移动
        document.addEventListener('mousemove', moveFn)
    }

}
