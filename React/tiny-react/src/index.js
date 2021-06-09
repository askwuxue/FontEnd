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

// // console.log(Header);

// TinyReact.render(<Header title="Header"></Header>, root);

// 2. 类组件

class Alert extends TinyReact.Component {
    // 父类中定义this.props。子类中也可以使用了
    constructor(props) {
        // TODO 子类的的constructor中this的指向???
        super(props);
        this.state = {
            name: '改变之前的名字'
        }
        this.handleChangeName = this.handleChangeName.bind(this);
    }

    handleChangeName() {
        this.setState({
            name: '改变之后的名字'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.name}</div>
                <button onClick={this.handleChangeName}>改变名字</button>
            </div>
        )
    }
}

class Test extends TinyReact.Component {
    render() {
        return (
            <div>
                this is Test component
            </div>
        )
    }
}

// console.log(Alert);

TinyReact.render(<Alert name="wuxue" age={18} />, root);

setTimeout(() => {
    // TinyReact.render(<Alert name="wuxue" age={18} />, root);
    TinyReact.render(<Test name="wuxue" age={18} />, root);
}, 2000)

// console.log(virtualDom);