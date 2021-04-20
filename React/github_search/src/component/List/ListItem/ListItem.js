import React, { Component } from 'react'
import './ListItem.css'

export default class ListItem extends Component {
    render() {
        const imgUrl = this.props.imgUrl;
        // console.log(this.props.imgUrl);
        return (
            <div className="list-item">
                <img src={imgUrl} alt="..." class="img-circle"></img>
            </div>
        )
    }
}
