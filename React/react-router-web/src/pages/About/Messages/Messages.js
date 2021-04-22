import React, { Component } from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import Detail from './Detail/Detail'

export default class Messages extends Component {
    state = {
        msgArr: [
            {id: '1', msg: "今天是国庆"},
            {id: '2', msg: "今天是五一"},
            {id: '3', msg: "今天是一个好日子"},
        ]
    }
    push = (item) => {
        // let { id, msg } = item;
        // 这个地方使用箭头函数 否则会导致this丢失拿不到props
        return () => {
            // console.log(id);
            // console.log(msg);
            // console.log(this.props);
            // TODO 编程式导航 前进
            this.props.history.push('/about/messages/detail', item);
        }
    }

    // TODO 这个地方有个bug 无论点击哪一个返回都可以返回 是出乎意料的
    goBack = (item) => {
        // console.log(item);
        this.props.history.goBack();
    }

    render() {
        const msgArr = this.state.msgArr;
        return (
            <div>
                <ul>
                    {
                        msgArr.map(item => {
                            return (
                            <li key={item.id}>
                                {/* <a href="/xxxx">{`${item.msg} ${item.id}`}</a> */}
                                {/* 1. 向路由组件传递params参数 */}
                                {/* <Link to={`/about/messages/detail/${item.id}/${item.msg}`}>{`${item.msg} ${item.id}`}</Link> */}
                        
                                {/* 2. 使用查询参数的方式传递参数 */}
                                {/* <Link to={`/about/messages/detail/?id=${item.id}&msg=${item.msg}`}>{`${item.msg} ${item.id}`}</Link> */}

                                {/* 3. 向路由组件传递state参数 */}
                                <Link replace to={{ pathname: "/about/messages/detail", state: { id: item.id, msg: item.msg }}}>{`${item.msg} ${item.id}`}</Link>
                                {/* onClick={this.push()} 这种方式是调用的this.push函数中返回的函数 默认this.push就是调用*/}
                                &nbsp;&nbsp;<button onClick={this.push(item)}>前进</button>
                                {/* 使用箭头函数 函数定义的方式 向函数传递参数 */}
                                &nbsp;&nbsp;<button onClick={() => this.goBack(item)}>后退</button>
                            </li>)
                        })
                    }
                </ul>
                <hr />
                <Switch>
                    {/* 路由匹配 */}
                    {/* <Route path="/about/messages/detail" component={Detail}></Route> */}

                    {/* 1. 接受由params传递过来的参数 在Detail的props对象的match属性的params属性中 */}
                    {/* <Route path="/about/messages/detail/:id/:msg" component={Detail}></Route> */}

                    {/* 2 接受search传递的参数 路由组件不需要特殊的接受方式 会在props中显示 */}
                    {/* <Route path="/about/messages/detail/" component={Detail}></Route> */}
                    {/* TODO replace 开启路由replace属性 跳转之后使用replace进行替换不保存浏览历史 */}
                    {/* 从当前开始的所有浏览不会被存入history栈 */}
                    <Route replace={true}  path="/about/messages/detail/" component={Detail}></Route>
                    
                    {/* <Redirect to="/about/messages/detail"></Redirect> */}
                </Switch>
                {/* <Detail></Detail> */}
            </div>
        )
    }
}
