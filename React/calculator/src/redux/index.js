// TODO combineReducers 是合并多个reducer的方法
import { combineReducers } from 'redux'
 
// 引入为Count组件工作的reducer
import countReducer from './count/countReducer'

// 引入为Person组件工作的reducer
import personReducer from './person/personReducer';

// 合并多个reducer，reducer合并之后是一个对象，对象中保存着不同的reducer
// count和person就是reducer中保存对象的两个元素
export default  combineReducers({
    count: countReducer,
    person: personReducer
})