import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        return (
            <div>
                {/* TODO2 注 {...this.props这种写法是将props一一对应进行传递}
                    this.props.children属性最终也会渲染在标签体中
                    {this.props.children} 不用写咋标签体里面，直接放在属性中
                    渲染的时候会被渲染成和在标签体中一样的
                */}
                <NavLink {...this.props} activeClassName="highLight" className="btn btn-default navbar-btn" ></NavLink>
            </div>
        )
    }
}
