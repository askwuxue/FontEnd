import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className='nav'>
                    {/* Link 其实最终会被渲染成a标签 */}
                    {/* TODO NavLink 的activeClassName为什么对应的css属性会在页面加载就被渲染
                        而不是在点击选中状态的时候被选中*/}
                    <NavLink to="/home" activeClassName="highLight" className="list-group-item" >Home</NavLink>
                    {/* <Link to='/home' className="btn btn-default">Home</Link> */}
                {/* <a className="btn btn-default" href="/home" role="button">Home</a> */}
                {/* <a className="btn btn-default" href="/about" role="button">About</a> */}
                     {/* <Link to='/about' className="btn btn-default">About</Link> */}
                     <NavLink to="/home" activeClassName="highLight" className="list-group-item" >About</NavLink>
                     {/* 路由组件接受的默认接受到props history location match */}
                     <Route path='/home' component={ Home }/>
                     <Route path='/about' component={ About }/>
                </nav>
            </div>
        )
    }
}
