import TinyReact from './TinyReact';

const root = document.getElementById('root');

const virtualDOM = (
    <div className="shopping-list">
        <h1 style="color: blue">Shopping List for</h1>
        { 1 > 2}
        <button onClick={e => console.log(e.target)}>点击</button>
        <div>
            <span>这是一段文本</span>
        </div>
    </div>
)

const newVirtualDOM = (
    <div className="shopping-list" user-define="user">
        <h1 style="color: blue">Shopping List for</h1>
        { 1 > 2}
        <button onClick={e => console.log('Hello World')}>点击</button>
        <div>
            <p>这是一被修改过的文本</p>
        </div>
    </div>
)

TinyReact.render(virtualDOM, root);

setTimeout(() => {
    TinyReact.render(newVirtualDOM, root);
}, 3000)

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

// class Alert extends TinyReact.Component {
//     // 父类中定义this.props。子类中也可以使用了
//     constructor(props) {
//         // TODO 子类的的constructor中this的指向???
//         super(props);
//     }

//     render() {
//         return (
//             <div>Alert, {this.props.name}, {this.props.age}</div>
//         )
//     }
// }

// console.log(Alert);

// TinyReact.render(<Alert name="wuxue" age={18} />, root);

// console.log(virtualDom);