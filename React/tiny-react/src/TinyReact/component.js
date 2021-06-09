import diff from "./diff";

// 根据子类调用super 对父类中的props赋值， 从而使子类也可以使用props
export default class Component {
    constructor(props) {
        this.props = props;
    }

    // 更新state，子类调用
    setState(state) {
        // this指向子类实例 生成一个新的对象
        this.state = Object.assign({}, this.state, state);
        // 获取virtualDOM
        let virtualDOM = this.render();
        // 获取旧的DOM
        let oldDOM = this.getDOM();
        // 获取容器
        let container = oldDOM.parentNode;
        // 对比渲染virtualDOM
        diff(virtualDOM, container, oldDOM);
    }

    // 设置DOM，实例调用
    setDOM(dom) {
        this._dom = dom;
    }

    getDOM() {
        return this._dom;
    }

}