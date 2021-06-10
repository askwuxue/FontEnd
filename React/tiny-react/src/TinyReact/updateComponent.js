import diff from "./diff";

// 更新组件
export default function updateComponent(virtualDOM, oldComponent, oldDOM, container) {
    // 已经挂载的组件接受新的props之前调用
    oldComponent.UNSAFE_componentWillReceiveProps(virtualDOM.props);
    // Props发生变化才调用
    if (oldComponent.shouldComponentUpdate(virtualDOM.props)) {
        let prevProps = oldComponent.props;
        // 当组件收到新的 props 或 state 时，会在渲染之前调用 UNSAFE_componentWillUpdate()。使用此作为在更新发生之前执行准备更新的机会。初始渲染不会调用此方法
        oldComponent.UNSAFE_componentWillUpdate(virtualDOM.props);
        // 更新props
        oldComponent.updateProps(virtualDOM.props);
        // 返回新的virtualDOM对象
        let nextVirtualDOM = oldComponent.render();
        nextVirtualDOM.component = oldComponent;
        diff(nextVirtualDOM, container, oldDOM);
        // componentDidUpdate() 会在更新后会被立即调用。首次渲染不会执行此方法
        oldComponent.componentDidUpdate(prevProps);
    }
}