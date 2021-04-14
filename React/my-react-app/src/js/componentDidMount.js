class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {price: 1}
    }
    updatePrice = () => {
        this.setState({
            price: this.state.price + 1
        })
    }

    // 组件挂载完毕
    componentDidMount() {
        console.log("componentDidMount----");
    }
    render() {
        return(
            <div>
                <p>当前价格是: {this.state.price}</p>
                <input type="button" onClick={this.updatePrice} value='价格加1' />
            </div>
        )
    }
}

ReactDOM.render(
    <Car />,
    document.getElementById('root')
)
