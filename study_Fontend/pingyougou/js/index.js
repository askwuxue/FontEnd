addEventListener('DOMContentLoaded', main);

function main() {
    console.log('index.js success');
    // 获得焦点父盒子 
    var focus = document.querySelector('.focus');
    // 获得focus中的左右小箭头
    var arrow_left = document.querySelector('.arrow_left');
    var arrow_right = document.querySelector('.arrow_right');
    // 获得focus list
    var focusList = document.querySelector('.focus-list');
    // 获得focus list 中的所有li标签 
    var focusListChild = document.querySelectorAll('.focus-list li');
    var circle = document.querySelector('.circle');
    // 鼠标经过focus区域 显示左右的小箭头
    focus.addEventListener('mouseenter', function() {
        arrow_left.style.display = 'block';
        arrow_right.style.display = 'block';

    });
    // 鼠标离开focus区域 隐藏左右的小箭头
    focus.addEventListener('mouseleave', function() {
        arrow_left.style.display = '';
        arrow_right.style.display = '';
    })

    // 根据focus-list 添加小圆点
    for (var i = 0; i < focusListChild.length; i++) {
        var circleLi = document.createElement('li');
        // 为所有的li添加自定义属性
        circleLi.setAttribute('index', i);
        circle.appendChild(circleLi);
    }
    // 默认第一个li的样式
    circle.children[0].className = 'current_circle';
    // 点击circleLi 动画切换  使用事件委托
    circle.addEventListener('click', function(event) {
        // 清空circle的所有样式
        for (var i = 0; i < circle.children.length; i++) {
            if (event.target.hasAttribute('index')) {
                circle.children[i].className = '';
            }
        }
        // TODO 使用事件委托时候的bug 当点击的不是下面的子元素 添加样式会有问题
        // 为当前点击的li 添加样式
        // 如果点击到的元素不是li元素 则不进行处理
        if (event.target.hasAttribute('index')) {
            event.target.className = 'current_circle';
        }
        var target = -event.target.getAttribute('index') * focus.offsetWidth;
        animation(focusList, target);
    });
    // 录播图自由切换克隆第一个轮播图添加到最后
    focusList.appendChild(focusList.children[0].cloneNode(true));
    // 点击左右箭头 动画播放
    arrow_left.addEventListener('click', animationPlay)
        // 用户点击次数
    var num = 0;
    // 节流阀
    var flag = true;

    function animationPlay(event) {
        if (flag) {
            // flag = false;
            num++;
            // 如果点击到了最后一张 则动画到第二张
            if (num == focusList.children.length) {
                num = 1;
            }
            // console.log(focusList.offsetLeft);
            // 回调函数内将节流阀打开
            // TODO 函数调用不成功 animation函数 导致元素没法到达指定位置
            animation(focusList, -num * window.getComputedStyle(focus).width, function() {
                console.log('callback...');
                flag = true;
            });
            // animate(focusList, -num * focus.offsetWidth, function() {
            //     console.log('callback...');
            // })
        }
        // console.log(focusList.offsetLeft);
        // console.log(focus.offsetWidth);

    }
}