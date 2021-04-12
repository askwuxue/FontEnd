// 每一个标签元素都必须具有唯一的key值
let arr = [<h1 key='0'>这是标题</h1>, <p key='1'>这是一段内容</p>];

// JSX允许在模板中插入变量，如果该变量是一个数组，JSX会把他的所有成员添加到模板中
ReactDOM.render(
    <div>
        {arr}
    </div>,
    document.getElementById('root')
)