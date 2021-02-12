window.addEventListener('load', mainFn);

function mainFn() {
    var tille = document.querySelector('.title');
    var closeBtn = document.querySelector('.close-link');
    var logonBox = document.querySelector('.logon');
    var popupModal = document.querySelector('.popup-modal');


    console.log(logonBox.offsetParent);

    popupModal.addEventListener('click', clickPopupFn);

    function clickPopupFn(e) {
        logonBox.style.display = 'block';
    }

    // 1. 监听鼠标按下
    tille.addEventListener('mousedown', dragFn);
    // 鼠标按下后执行的拖动函数函数 
    function dragFn(e) {
        // 获得鼠标在元素内部的位置
        console.log(e);
        var mousePageTop = e.pageY;
        var mousePageLeft = e.pageX;
        var logonTop = logonBox.offsetTop;
        var logonLeft = logonBox.offsetLeft
        var currentX = mousePageLeft - logonLeft;
        var currentY = mousePageTop - logonTop;
        console.log(currentX, currentY);
        // 2. 监听鼠标移动事件
        document.addEventListener('mousemove', moveFn)
    }
    // 鼠标移动执行函数
    function moveFn(e) {
        // 鼠标相对于页面的位置

        // console.log(logonBox.offsetTop, logonBox.offsetLeft);
        // console.log(mousePageTop, mousePageLeft);

        // console.log(logonBox.offsetParent);
        // logon相对于页面的位置 相对于定位的父级元素的位置  没有的话ji  HTML 
        // var logonTop = logonBox.offsetTop - logonBox.offsetHeight / 2;
        // var logonLeft = logonBox.offsetLeft - logonBox.offsetWidth / 2;
        // var currentX = mousePageLeft - logonLeft;
        // var currentY = mousePageTop - logonTop;
        // logonBox.style.left = (mousePageLeft - currentX) + 'px';
        // logonBox.style.top = (mousePageTop - currentY) + 'px';
        // console.log(fatherLeft, fatherTop)
        // console.log(mousePageLeft, mousePageTop);
        // console.log(e.pageX, e.pageY);
        // console.log(currentX, currentY)
        // console.log(logonLeft, logonTop);
        // console.log(logonBox.offsetLeft - logonBox.offsetWidth/2, logonBox.offsetTop - logonBox.offsetHeight / 2)
    }


}