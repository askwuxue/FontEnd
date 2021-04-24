import React, { Component } from 'react'
 
export default class CountUI extends Component {
    constructor(props) {
        super(props);
        // 存放select的ref
        this.selectRef = React.createRef();
    }

    // 增加
    increase = () => {
        let curSelected = parseInt(this.selectRef.current.value);
        // TODO this.props 接收到的是在容器组件里面定义的两个函数 mapStateToProps， mapDispatchToProps的返回值
        this.props.increase(curSelected);
    }

    // 减小
    decrease = () => {
        let curSelected = parseInt(this.selectRef.current.value);
        this.props.decrease(curSelected);
    }

    // 当选择的是奇数才加载
    increaseOdd = () => {
        let curSelected = parseInt(this.selectRef.current.value);
        this.props.increaseOdd(curSelected);
    }
    
    // 异步加载
    increaseAsync = () => {
        let curSelected = parseInt(this.selectRef.current.value);
        this.props.increaseAsync(curSelected, 1000);
    }

    render() {
        return (
            <div>
                <h1>当前的求和结果是: {this.props.data}</h1>
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
