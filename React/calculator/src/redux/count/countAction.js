import { INCREASE, DECREASE } from '../constant'

// 该文件用于创建action对象
export const increase = data => ({ type: INCREASE, data })

export const decrease = data => ({ type: DECREASE, data })

// 奇数加的action
export const increaseOdd = data => ((data % 2 === 1) ? { type: INCREASE, data } : { type: null })

// 借助中间间可以使用function action 异步action
let timer = null;
export const increaseAsync = (data, delay) => {
    // 及时清除定时器
    clearTimeout(timer);
    // 下面这是一个异步action 这个异步action接受了一个参数，即store.dispatch
    return (dispatch) => {
        timer = setTimeout(() => {
            // 在异步action内部调用同步action
            dispatch(increase(data))
        }, delay)
    }
}