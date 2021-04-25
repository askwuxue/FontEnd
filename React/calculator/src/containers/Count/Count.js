import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increase, 
         decrease, 
         increaseOdd, 
         increaseAsync } from '../../redux/count/countAction';

class CountUI extends Component {
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
                <h2>Count组件，Person组件求和为:  {this.props.userTotal}</h2>
                <h3>当前的求和结果是: {this.props.count}</h3>
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

// 它的作用就是像它的名字那样，建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
// TODO state就是reducers返回的对象，其中包括了count属性和person属性。
const mapStateToProps = ( state, ownProps ) => ({
    // TODO mapStateToProps 返回的对象中的值，即UI组件最终渲染的值，store只要发生变化，就会调用mapStateToProps
    count: state.count,
    userTotal: state.person.length
})

// 1. 函数式的mapDispatchToProps
// 建立 UI 组件的参数到store.dispatch方法的映射 
// const mapDispatchToProps = dispatch => ({
//     increase: data => {
//         dispatch(increaseAction(data))
//     },
//     decrease: data => {
//         dispatch(decreaseAction(data))
//     },
//     increaseOdd: data => {
//         if (data % 2 === 1) {
//             dispatch(increaseAction(data))
//         }
//     },
//     increaseAsync: (data, delay) => {
//         dispatch(increaseAsyncAction(data, delay))
//     }
// })

// 2. 对象方式的 mapDispatchToProps
// 建立 UI 组件的参数到store.dispatch方法的映射 
const mapDispatchToProps = {
    increase,
    decrease,
    increaseOdd,
    increaseAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)