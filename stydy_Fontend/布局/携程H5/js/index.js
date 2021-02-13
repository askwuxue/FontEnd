// TODO 如何解决滑动过快导致的瞬间空白
addEventListener('DOMContentLoaded', main);

function main() {
    // 获取元素
    var banner = document.querySelector('.banner');
    var bannerUl = document.querySelector('.banner ul');
    var ol = document.querySelector('.banner ol');
    var bannerList = document.querySelectorAll('.banner ul li');
    // 定时自动切换动画
    var index = 0;
    var moveX = 0;
    bannerUl.timer = setInterval(function() {
        // console.log('setInterval...');
        index++;
        moveX = -index * banner.offsetWidth;
        // console.log('moveX: ', moveX);
        bannerUl.style.transition = 'all .8s linear';
        bannerUl.style.transform = 'translateX(' + moveX + 'px)';
    }, 3000);
    // 当过渡效果结束
    bannerUl.addEventListener('transitionend', function() {
        // 如果到了最后一张 则从头开始
        if (index > 3) {
            index = 0;
            moveX = -index * banner.offsetWidth;
            bannerUl.style.transition = 'none';
            bannerUl.style.transform = 'translateX(' + moveX + 'px)';
            // changeCircleStyle();
        } else if (index < 0) {
            index = 3;
            moveX = -index * banner.offsetWidth;
            bannerUl.style.transition = 'none';
            bannerUl.style.transform = 'translateX(' + moveX + 'px)';
        }
        // 小圆点切换样式方法
        ol.querySelector('.current').classList.remove('current');
        // console.log(index);
        ol.children[index].classList.add('current');
    });
    // 开始位置的坐标
    var beginX;
    // 手指一动的距离
    var selfMoveX;
    // 节流阀
    var flag = false;
    // 开始按下
    bannerUl.addEventListener('touchstart', function(event) {
        clearInterval(bannerUl.timer);
        beginX = event.targetTouches[0].pageX;
        event.preventDefault();
    });
    // 手指移动
    bannerUl.addEventListener('touchmove', function(event) {
        flag = true;
        selfMoveX = event.targetTouches[0].pageX - beginX;
        var selfTranslateX = (-index * banner.offsetWidth) + selfMoveX;
        this.style.transition = 'none';
        this.style.transform = 'translateX(' + selfTranslateX + 'px)';
        event.preventDefault();
    });

    // 触摸结束
    bannerUl.addEventListener('touchend', function() {
        // 只有当存在touchmove时才进行判断
        if (flag) {
            if (Math.abs(selfMoveX) > 50) {
                // 左滑 selfMoveX 少于0
                if (selfMoveX < 0) {
                    index++;
                } else {
                    index--;
                }
            }
            this.style.transition = 'all 0.3s linear';
            this.style.transform = 'translateX(' + (-index * banner.offsetWidth) + 'px)';
        }
        // 清除定时器
        clearInterval(bannerUl.timer);
        bannerUl.timer = setInterval(function() {
            index++;
            moveX = -index * banner.offsetWidth;
            bannerUl.style.transition = 'all .8s linear';
            bannerUl.style.transform = 'translateX(' + moveX + 'px)';
        }, 3000);
    });
}