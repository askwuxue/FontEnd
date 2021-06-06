import TinyReact from './TinyReact';

const root = document.getElementById('root');

const virtualDom = (
    <div className="shopping-list">
        <h1 style="color: blue">Shopping List for</h1>
        { 1 > 2}
        <button onClick={e => console.log(e.target)}>点击</button>
    </div>
)

// TinyReact.render(virtualDom, root);

function Demo() {
    return <h1>Demo</h1>
}

// TinyReact.render(virtualDom, root);
function Header(props) {
    return (
        <div>
            {props.title}
            <Demo />
        </div>
    )
}

// console.log(Header);

TinyReact.render(<Header title="Header"></Header>, root);

// console.log(virtualDom);