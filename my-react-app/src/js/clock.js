// 使用函数组件
// function Clock(props) {
//     return (
//         <div>
//             <h1>this is clock</h1>
//             <h2>{props.date.toLocaleTimeString()}</h2>
//         </div>
//     )
// }

// function tick() {
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('root')
//     )
// }

// setInterval(tick, 1000);


// 使用类组件
// 1. 将this.prop换成this.state
// 2. 添加构造函数 为state赋值
// 3. 移除组件的date属性
// 4. 添加声明周期方法 componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行
// TODO setInterval(() => { this.tick(); }, 1000); 内部this的指向还不清楚
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>this is clock</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
} 

// 任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。
function App(props) {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
