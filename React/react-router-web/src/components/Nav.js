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
                    <NavLink to="/home" className="btn btn-default" activeClassName="hightLight">Home</NavLink>
                    {/* <Link to='/home' className="btn btn-default">Home</Link> */}
                {/* <a className="btn btn-default" href="/home" role="button">Home</a> */}
                {/* <a className="btn btn-default" href="/about" role="button">About</a> */}
                     {/* <Link to='/about' className="btn btn-default">About</Link> */}
                     <NavLink to="/home" className="btn btn-default"  activeClassName="hightLight">About</NavLink>
                     {/* 路由组件接受的默认接受到props history location match */}
                     <Route path='/home' component={ Home }/>
                     <Route path='/about' component={ About }/>
                </nav>
            </div>
        )
    }
}
