import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="home">
                this is Home page
            </div>
        )
    }
}
