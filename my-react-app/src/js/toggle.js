class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // TODO 必须显式的绑定this给handleClick 
        // TODO 因为这个类中的方法中的this会被React指向undefined，而不是方法的调用者，所以显示绑定或者箭头函数
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render() {
        return (
            // 显式绑定this 使用this.handleClick
            // <button onClick={this.handleClick}>
            //     {this.state.isToggleOn ? 'ON' : 'OFF'}
            // </button>
            // TODO 通过箭头函数绑定 必须是调用的形式才可以
            <button onClick={() => {this.handleClick()}}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
)