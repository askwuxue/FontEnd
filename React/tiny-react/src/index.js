import TinyReact from './TinyReact';

const root = document.getElementById('root');

// const virtualDOM = (
//     <div className="shopping-list">
//         <h1 style="color: blue">Shopping List for</h1>
//         { 1 > 2}
//         <button onClick={e => console.log(e.target)}>点击</button>
//         <div>
//             <span>这是一段文本</span><br></br>
//             <span>这是一个即将被删除的元素</span>
//         </div>
//     </div>
// )

// const newVirtualDOM = (
//     <div className="shopping-list" user-define="user">
//         <h1 style="color: blue">Shopping List for</h1>
//         { 1 > 2}
//         <button onClick={e => console.log('Hello World')}>点击</button>
//         <div>
//             <span>这是被修改的一段文本</span>
//         </div>
//     </div>
// )

// TinyReact.render(virtualDOM, root);

// setTimeout(() => {
//     TinyReact.render(newVirtualDOM, root);
// }, 3000)


// const newVirtualDOM = (
//     <div className="shopping-list" user-define="user">
//         <h1 style="color: blue">Shopping List for</h1>
//         { 1 > 2}
//         <button onClick={e => console.log('Hello World')}>点击</button>
//         <div>
//             <span>这是被修改的一段文本</span>
//         </div>
//     </div>
// )

// TinyReact.render(newVirtualDOM, root);

// 1. 函数组件
// function Demo() {
//     return <h1>Demo</h1>
// }

// // TinyReact.render(virtualDom, root);
// function Header(props) {
//     return (
//         <div>
//             {props.title}
//             <Demo />
//         </div>
//     )
// }


// TinyReact.render(<Header title="Header"></Header>, root);

// 2. 类组件
// class Test extends TinyReact.Component {
//     render() {
//         return (
//             <div>
//                 this is Test
//             </div>
//         )
//     }
// }
// class Alert extends TinyReact.Component {
//     // 父类中定义this.props。子类中也可以使用了
//     constructor(props) {
//         // TODO 子类的的constructor中this的指向???
//         super(props);
//         this.state = {
//             name: '改变之前的名字'
//         }
//         this.handleChangeName = this.handleChangeName.bind(this);
//     }

//     handleChangeName() {
//         this.setState({
//             name: '改变之后的名字'
//         })
//         console.log(this.clickBtnRefValue);
//         console.log('Test component', this.componentRef);
//     }

//     render() {
//         return (
//             <div>
//                 <div>{this.props.name}------------{this.props.age}</div>
//                 {/* <button onClick={this.handleChangeName}>改变名字</button> */}
//                 <button onClick={this.handleChangeName} ref={e => this.clickBtnRefValue = e.value} value="button">改变名字</button>
//                 <Test ref={e => this.componentRef = e}></Test>
//             </div>
//         )
//     }
// }

// TinyReact.render(<Alert name="wuxue" age={18} />, root);

// setTimeout(() => {
//     TinyReact.render(<Alert name="xuning" age={16} />, root);
//     // TinyReact.render(<Test name="wuxue" age={18} />, root);
// }, 2000)


// 测试使用key带来的性能优化
class DemoKey extends TinyReact.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    ID: 1,
                    name: '张三'
                },
                {
                    ID: 6,
                    name: '李四'
                },
                {
                    ID: 2,
                    name: '王二麻子'
                },
                {
                    ID: 4,
                    name: '刘大脑子'
                }
            ]
        };
        this.handleChangeOrder = this.handleChangeOrder.bind(this);
    }
    handleChangeOrder() {
        let newState = JSON.parse(JSON.stringify(this.state));
        newState.data.push(newState.data.shift());
        console.log(JSON.stringify(newState));
        this.setState(newState);
    }
    render() {
        return (
            <div>
                <div>
                    <h4>数据展示</h4>
                    {/* TODO 为什么返回数组 */}
                    <ul>
                        {
                            this.state.data.map(item => {
                                return <li key={item.ID}>{item.name}</li>
                            })
                        }
                    </ul>
                    <button onClick={this.handleChangeOrder}>改变顺序</button>
                </div>
            </div>
        )
    }
}

TinyReact.render(<DemoKey />, root);

