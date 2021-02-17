addEventListener('DOMContentLoaded', main);
// 入口函数
function main() {
    let that = null;
    class Tab {
        // 构造函数
        constructor() {
                // 存对象中的this
                that = this;
                // 获得添加tab的元素
                this.tabAdd = document.querySelector('.tabadd span');
                // 获得控制内容的父盒子
                this.tabsCon = document.querySelector('.tabscon');
                this.init();
            }
            // 类初始化方法
        init() {
                this.updateNode();
                // 事件委托进行绑定事件
                // this.eleUl.addEventListener('click', that.toggleTab);
                // 绑定添加事件
                this.tabAdd.addEventListener('click', that.addTab);
                // 为tab li 标签添加index
                for (let i = 0; i < this.eleUl.children.length; i++) {
                    // 为每个tab中的li添加事件
                    this.eleLi[i].addEventListener('click', this.toggleTab);
                    this.eleUl.children[i].setAttribute('index', i);
                    // 给每个关闭元素添加点击事件
                    this.eleClose[i].addEventListener('click', this.removeTab);
                    // 为所有的可编辑span添加dblclick事件
                    this.editSpan[i].addEventListener('dblclick', this.editTab);
                }
            }
            // update node  添加node之后 需要update
        updateNode() {
            // 取得tab切换的ul标签
            this.eleUl = document.querySelector('.fisrstnav ul');
            // 取得所有的li标签
            this.eleLi = this.eleUl.children;
            // 获得section 标签
            this.eleSections = document.querySelectorAll('.tabscon section');
            // 获得删除 标签
            this.eleClose = document.querySelectorAll('.icon-guanbi');
            // 获取li中的所有可编辑span
            this.editSpan = document.querySelectorAll('.fisrstnav ul li span:first-child');
        }

        // 切换tab
        toggleTab(event) {
                // 排他 清除样式
                that.clearStyle();
                // 当点击的是li 才切换样式 
                // console.log(event);
                this.className = 'liactive';
                that.eleSections[this.getAttribute('index')].className = 'conactive';
                // 不适合使用事件委托
                // if (event.target.nodeName === 'LI') {
                //     event.target.className = 'liactive';
                //     // 使用setAttribute 设置的值 使用getAttribute获得
                //     that.eleSections[event.target.getAttribute('index')].className = 'conactive';
                // }
                // else {
                //     event.target.parentElement.className = 'liactive';
                //     that.eleSections[event.target.parentElement.getAttribute('index')].className = 'conactive';
                // }

            }
            // clear style
        clearStyle() {
                // 需要做一个判断eleLi和section是匹配的，不匹配会报错
                for (let i = 0; i < this.eleUl.children.length; i++) {
                    this.eleUl.children[i].className = '';
                    // console.log(that.eleSections[i]);
                    // 如果li 和 内容不匹配 不对内容的class进行更改
                    if (that.eleSections[i]) {
                        that.eleSections[i].className = '';
                    }

                }
            }
            // 添加标签以及内容
        addTab() {
                that.clearStyle();
                let addLi = '<li class="liactive"><span>新tab</span><span class="iconfont icon-guanbi"></span></li>'
                let addSection = '<section class="conactive">新内容</section>';
                that.eleUl.insertAdjacentHTML('beforeend', addLi);
                that.tabsCon.insertAdjacentHTML('beforeend', addSection);
                that.init();

            }
            // 删除tab
        removeTab(event) {
            // 阻止关闭元素导致事件冒泡
            event.stopPropagation();
            // this.target.parentElement;
            // 获得对应的li的index
            let index = this.parentElement.getAttribute('index');

            // 删除li标签
            that.eleUl.children[index].remove();
            console.log('index: ', index);
            // 删除内容
            that.eleSections[index].remove();
            // 删除结束之后就update
            that.init();
            // 如果点击的不是最后一个 其他元素处于被.liactive状态 则不切换样式 保持该元素的样式 直接退出
            if (document.querySelector('.liactive')) return;
            // 当删除的是最后一个，则将前一个添加手动点击
            index--;
            that.eleUl.children[index] && that.eleUl.children[index].click();
        }

        // 编辑
        // TODO 当input获得的焦点时  双击 导致的错误  当第二次双击的时候 选中的是input元素 所有会报错
        editTab(event) {
            // 禁止双击选中
            window.getSelection ? window.getSelection().removeAllRanges() : document.section.empty();
            // console.log('event.target.NodeName: ', event.target.nodeName);
            // console.log(typeof(event.target.nodeName));
            if (event.target.nodeName == 'SPAN') {
                // 存放span中原来的值
                let str = this.innerHTML;
                console.log(event.target);
                this.innerHTML = `<input type="text" />`;
                // 获取input
                let input = this.children[0];
                input.value = str;
                input.select();
                // 失去焦点
                input.onblur = function(e) {
                        this.parentNode.innerHTML = this.value;
                    }
                    // 按下回车
                input.onkeyup = function(e) {
                    if (e.keyCode === 13) {
                        this.blur();
                    }
                }
            }
        }
    }
    const tab = new Tab();
}