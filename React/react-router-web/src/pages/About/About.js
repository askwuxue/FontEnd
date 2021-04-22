import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import './About.css'
import Messages from './Messages/Messages'
import News from './News/News'

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <MyNavLink to="/about/news">News</MyNavLink>
                <MyNavLink to="/about/messages">Messages</MyNavLink>
                <hr />
                <Switch>
                    {/* 路由组件接受的默认接受到props history location match */}
                    {/* 属性exact开启严格匹配 也就是上述中的to路径必须包含path值且以path值开头*/}
                    <Route path='/about/news' component={ News }/>
                    <Route path='/about/messages' component={ Messages }/>
                    {/* 卸载路由规则的下方当没有路由规则匹配的时候，重定向到一个路由 */}
                    <Redirect to='/about/news'></Redirect>
                </Switch> 
            </div>
        )
    }
}
