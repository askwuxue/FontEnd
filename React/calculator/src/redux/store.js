// createStore 专门用于创建redux中的核心对象store
import { createStore } from 'redux'

// 引入为Count组件工作的reducer
import countReducer from './countReducer'

// 导出一个store对象
export default createStore(countReducer)