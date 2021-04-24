// createStore 专门用于创建redux中的核心对象store
// TODO combineReducers 是合并多个reducer的方法
import { createStore, applyMiddleware, combineReducers } from 'redux'

// 引入中间件，允许在使用function 类型的action，即异步action，但是最终还是在function类型的action中
// 使用object 类型的action。不能直接使用异步action 需要redux-thunk中间件支持
import thunk from 'redux-thunk';

// 引入为Count组件工作的reducer
import countReducer from './count/countReducer'

// 引入为Person组件工作的reducer
import personReducer from './person/personReducer';

// 合并多个reducer，reducer合并之后是一个对象，对象中保存着不同的reducer
// count和person就是reducer中保存对象的两个元素
const reducers = combineReducers({
    count: countReducer,
    person: personReducer
})

// 导出一个store对象
export default createStore(
    reducers,
    // TODO 使用中间间允许异步 action(function)
    applyMiddleware(thunk)
)