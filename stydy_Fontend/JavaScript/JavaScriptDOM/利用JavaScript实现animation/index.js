function animation(element, x, y, time) {
    // var skip = (time * 1000) / Math.sqrt(x * x + y * y);
    // if()
    
    element.style.top = x + 'px';
    element.style.right = y + 'px';
}
var animationElement = document.querySelector('.animation');
animation(animationElement, 200, 110);