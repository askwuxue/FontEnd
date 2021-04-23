import React, { Component } from 'react'
import store from '../../redux/store';
import { increaseAction, decreaseAction } from '../../redux/countAction'

export default class Count extends Component {
    constructor(props) {
        super(props);
        // 存放select的ref
        this.selectRef = React.createRef();
        // 存放定时器ID
        this.timer = null;
    }

    // 订阅reducer的改变
    componentDidMount() {
        // store.subscribe() 订阅reducer返回值的变化 接受一个回调函数 在回调函数中通过this.setState({})
        // 触发组件的重新渲染， 也可以在根组件的生命周期函数中订阅reducer的改变
        store.subscribe(() => {
            this.setState({})
        });
    }

    // 增加
    increase = () => {
        let curSelected = parseInt(this.selectRef.current.value);
        // store.dispatch() 像reducer分发内容 参数是action对象
        // store.dispatch({type: 'increase', data: curSelected});
        store.dispatch(increaseAction(curSelected))
        // console.log(this.selectRef.current.value);
        // store.getState() 接受reducer返回的内容
        // console.log(store.getState());
    }

    // 减小
    decrease = () => {
        let curSelected = parseInt(this.selectRef.current.value);
        // this.setState({count: this.state.count - curSelected});
        // store.dispatch({type: 'decrease', data: curSelected});
        store.dispatch(decreaseAction(curSelected))
    }

    // 当选择的是奇数才加载
    increaseOdd = () => {
        let curSelected = parseInt(this.selectRef.current.value);
        if (curSelected % 2 === 1) {
            // store.dispatch({type: 'increase', data: curSelected});
            store.dispatch(increaseAction(curSelected))
        }
    }
    
    // 异步加载
    increaseAsync = () => {
        let curSelected = parseInt(this.selectRef.current.value);
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            // store.dispatch({type: 'increase', data: curSelected});
            store.dispatch(increaseAction(curSelected))
        }, 500)
    }

    render() {
        return (
            <div>
                <h1>当前的求和结果是: {store.getState()}</h1>
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
