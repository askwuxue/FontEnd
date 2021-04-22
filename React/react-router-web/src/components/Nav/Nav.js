import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import About from '../../pages/About/About'
import Home from '../../pages/Home/Home'
import MyNavLink from '../MyNavLink'
import './Nav.css'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className='nav'>
                    {/* Link 其实最终会被渲染成a标签 */}
                    {/* TODO1 NavLink 的activeClassName为什么对应的css属性会在页面加载就被渲染
                        而不是在点击选中状态的时候被选中*/}
                    {/* <Link to='/home' className="btn btn-default">Home</Link> */}
                    {/* <a className="btn btn-default" href="/home" role="button">Home</a> */}
                    {/* <a className="btn btn-default" href="/about" role="button">About</a> */}
                    {/* <Link to='/about' className="btn btn-default">About</Link> */}
                     
                    {/* <NavLink to="/home" activeClassName="highLight" className="list-group-item" >Home</NavLink>
                    <NavLink to="/home" activeClassName="highLight" className="list-group-item" >About</NavLink> */}
                    
                    {/* 封装的MyNavLink的使用 */}
                    <MyNavLink to="/home">Home</MyNavLink>
                    <MyNavLink to="/about">About</MyNavLink>

                    {/* Switch 选择匹配 当其中一个匹配成功后就结束查找 */}
                    <Switch>
                        {/* 路由组件接受的默认接受到props history location match */}
                        {/* 属性exact开启严格匹配 也就是上述中的to路径必须包含path值且以path值开头*/}
                        <Route path='/home' component={ Home }/>
                        <Route path='/about' component={ About }/>
                        {/* 卸载路由规则的下方当没有路由规则匹配的时候，重定向到一个路由 */}
                        <Redirect to='/home'></Redirect>
                    </Switch>    
                </nav>
            </div>
        )
    }
}
