// 元素选择器名 元素移动目标的位置 动画间隔时间    默认这个函数只在x轴上移动
function animation(element, target, callback) {

    if (element.timer) {
        clearTimeout(element.timer);
    }

    element.timer = setInterval(function() {
        // 获得元素的当前位置
        var current_x = element.offsetLeft;
        // console.log('current_x: ', current_x);
        // console.log('target: ', target)
        // 移动步长
        var step = (target - current_x) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // console.log('step: ', step);
        if (target == current_x) {
            clearInterval(element.timer);
            if (callback) {
                callback();
            }
        }

        element.style.left = element.offsetLeft + step + 'px';
    }, 10);
}