import React, { Component } from 'react'
import './List.css'
import ListItem from './ListItem/ListItem'
// import ListError from './ListError/ListError'
// import ListFirst from './ListFirst/ListFirst'
// import ListLoading from './ListLoading/ListLoading'

export default class List extends Component {
    render() {
        return (
            <div className="list">
               {/* <ListFirst /> */}
               {/* <ListLoading /> */}
               {/* <ListError /> */}
               <ListItem />
            </div>
        )
    }
}
