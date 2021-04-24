import { INCREASE, DECREASE } from '../constant'

// 该文件用于创建action对象
// () 中的对象当成函数的返回值被返回，如果不加小括号，大括号会被当成函数体处理
export const increaseAction = data => ({ type: INCREASE, data })

export const decreaseAction = data => ({ type: DECREASE, data })

// 奇数加的action
export const increaseOddAction = data => ((data % 2 === 1) ? {type: INCREASE, data} : {type: null})

// 借助中间间可以使用function action 异步action
let timer = null;
export const increaseAsyncAction = (data, delay) => {
    // 及时清除定时器
    clearTimeout(timer);
    // 下面这是一个异步action 这个异步action接受了一个参数，即store.dispatch
    return (dispatch) => {
        timer = setTimeout(() => {
            // 在异步action内部调用同步action
            dispatch(increaseAction(data))
        }, delay)
    }
}

// TODO exports 导出函数必须是一个具名函数 
// export function test() {
//     console.log(1);
// }