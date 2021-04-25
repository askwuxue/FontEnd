// createStore 专门用于创建redux中的核心对象store
import { createStore, applyMiddleware, compose } from 'redux'

// TODO 引入使用redux-devtools-extension 的第三方库无法使用
// import { composeWithDevTools } from 'redux-devtools-extension'

// 引入中间件，允许在使用function 类型的action，即异步action，但是最终还是在function类型的action中
// 使用object 类型的action。不能直接使用异步action 需要redux-thunk中间件支持
import thunk from 'redux-thunk'

// 引入合并之后的reducers
import reducers from './index'


// 导出一个store对象
export default createStore(
    reducers,
    // 使用redux扩展库提供的函数
    // TODO 使用中间间允许异步 action(function),
    applyMiddleware(thunk)
    )