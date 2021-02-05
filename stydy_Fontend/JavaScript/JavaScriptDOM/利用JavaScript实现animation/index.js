function animation(elementId, x, y, delay) {
    
    // 被动画元素
    var element = document.getElementById(elementId);
    var current_width = parseInt(window.getComputedStyle(element, null).width);
    var current_height = parseInt(window.getComputedStyle(element, null).height);
    // 动画运动范围 默认运动在父级元素内
    var fatherElement = element.parentElement;
    // 运动区域   注意单位的转换
    var width = parseInt(window.getComputedStyle(fatherElement, null).width);
    var height = parseInt(window.getComputedStyle(fatherElement, null).height);

    if(fatherElement.chearPara) {
        console.log("清除定时器");
        clearTimeout(fatherElement.chearPara);
    }
    console.log("如果这句话开始就出现，代表清除没问题");
    if(x > width) {
        x = width - current_width;
    }
    if(y > height) {
        y = height - current_height;
    }
    // 如果元素没有初始位置 设置默认值
    if(!element.style.top) {
        element.style.top = 0;
    }
    if(!element.style.left) {
        element.style.left = 0;
    }
    
    var current_x = parseInt(element.style.left);
    var current_y = parseInt(element.style.top);

    // 元素当前位置等于目标位置 退出
    if(current_x == x && current_y == y) {
        return true;
    }
    // 当前位置小于目标位置
    if(current_x < x) {
        current_x++;
    }
    if(current_x > x) {
        current_x--;
    }
    if(current_y < y) {
        current_y++
    }
    // 当前位置大于目标位置
    if(current_y > y) {
        current_y--
    }
    // 更新 位置
    element.style.top = current_y + "px";
    element.style.left = current_x + "px";
    
    // 间隔一定时间后 
    var repeat = "animation('" + elementId + "' ," + x + " ," + y + ")";
    // console.log(repeat);

    // 时间间隔内调用函数
    fatherElement.chearPara = setTimeout(repeat, delay);
}
var animationElement = document.querySelector('.animation');
// console.log(animationElement);
animation("move", 500, 610, 10);