import { INCREASE, DECREASE } from '../constant';

// 该文件用于创建action对象
// () 中的对象当成函数的返回值被返回，如果不加小括号，大括号会被当成函数体处理
export const increaseAction = (data) => ({ type: INCREASE, data })

export const decreaseAction = (data) => ({ type: DECREASE, data })

// TODO exports 导出函数必须是一个具名函数 
// export function test() {
//     console.log(1);
// }