import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store  from './redux/store'

ReactDOM.render(
  // 将所有组件包括在Provider中，所有使用store的容器组件都会被传递store
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
