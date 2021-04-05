let arr = ['a', 'b', 'c'];

// 以< 开头的会被解析为HTML 以{ 开头的会被解析为JavaScript 循环标签的元素的时候 标签元素必须具有唯一的key
ReactDOM.render(
    <div>
        {
            arr.map((item, index) => {
                return <div key={index}>Hello, {item}</div>
            })
        }
    </div>,
    document.getElementById('root')
)