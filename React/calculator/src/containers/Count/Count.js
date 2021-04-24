// 该容器组件连接UI组件，对UI组件的数据进行输入和输出
import { connect } from 'react-redux'
import CountUI from '../../components/CountUI/CountUI'

import { increaseAction, decreaseAction, increaseOddAction, increaseAsyncAction } from '../../redux/countAction'

// 它的作用就是像它的名字那样，建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
const mapStateToProps = ( state, ownProps ) => ({
    // TODO mapStateToProps 返回的对象中的值，即UI组件最终渲染的值，store只要发生变化，就会调用
    // mapStateToProps 这个方法
    data: state
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
    increase: increaseAction,
    decrease: decreaseAction,
    increaseOdd: increaseOddAction,
    increaseAsync: increaseAsyncAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)