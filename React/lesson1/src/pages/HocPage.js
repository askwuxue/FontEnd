import React, { Component } from 'react';

// function Child(props) {
//     return <div>Child</div>
// }

// TODO1 HOC 高阶组件 即：一个函数,接受一个组件返回一个组件就是高阶 
const foo = Cmp => props => {
    return(
        <div className="border">
            <Cmp {...props} />
        </div>
    )
}

// TODO2 利用高阶可以实现嵌套的作用
// const Foo = foo(foo(Child));

// TODO3 利用装饰器实现，使用装饰器的必须是一个class组件

@foo
class Child extends React.Component {
    render() {
        return <div>Child</div>
    }
}

export default class HocPage extends React.Component {
    render() {
        return(
            <div>
                <Child />
            </div>
        )
    }
}