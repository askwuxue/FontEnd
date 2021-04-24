import Count from './containers/Count/Count'
// import store from './redux/store'

function App() {
  return (
    <div>
      {/* TODO必须将store传递给容器组件 Provider代理也可以 */}
      <Count></Count>
    </div>
  );
}

export default App;
