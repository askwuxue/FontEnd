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

    // 更新props
    updateProps(props) {
        this.props = props;
    }

    // 生命周期 UNSAFE_componentWillReceiveProps() 会在已挂载的组件接收新的 props 之前被调用
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('UNSAFE_componentWillReceiveProps: ', nextProps);
    }

    // 根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为是 state 每次发生变化组件都会重新渲染
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate: ', this.props !== nextProps || this.state !== nextState);
        return this.props !== nextProps || this.state !== nextState;
    }

    // 当组件收到新的 props 或 state 时，会在渲染之前调用 UNSAFE_componentWillUpdate()。使用此作为在更新发生之前执行准备更新的机会。初始渲染不会调用此方法。
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('UNSAFE_componentWillUpdate: ', nextProps);
    }

    // componentDidUpdate() 会在更新后会被立即调用。首次渲染不会执行此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate: ', prevProps);
    }

}