import React, { Component } from 'react'

export default class Count extends Component {
    constructor(props) {
        super(props);
        // 初始
        this.state = {count: 0};
        // 存放select的ref
        this.selectRef = React.createRef();
        // 存放定时器ID
        this.timer = null;        
    }

    // 增加
    increase = () => {
        let curSelected = parseInt(this.selectRef.current.value);
        this.setState({count: this.state.count + curSelected});
        console.log(this.selectRef.current.value);
    }

    // 减小
    decrease = () => {
        let curSelected = parseInt(this.selectRef.current.value);
        this.setState({count: this.state.count - curSelected});
    }

    // 当选择的是奇数才加载
    increaseOdd = () => {
        let curSelected = parseInt(this.selectRef.current.value);
        if (curSelected % 2 === 1) {
            this.setState({count: this.state.count + curSelected});
        }
    }
    
    // 异步加载
    increaseAsync = () => {
        let curSelected = parseInt(this.selectRef.current.value);
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.setState({count: this.state.count + curSelected});
        }, 500)
    }

    render() {
        return (
            <div>
                <h1>当前的求和结果是: {this.state.count}</h1>
                <select ref={this.selectRef}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                &nbsp;&nbsp;
                <button onClick={this.increase}>+</button>
                &nbsp;&nbsp;
                <button onClick={this.decrease}>-</button>
                &nbsp;&nbsp;
                <button onClick={this.increaseOdd}>奇数加</button>
                &nbsp;&nbsp;
                <button onClick={this.increaseAsync}>异步加</button>
                &nbsp;&nbsp;
            </div>
        )
    }
}
