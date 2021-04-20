import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './List.css'
import ListItem from './ListItem/ListItem'
import ListError from './ListError/ListError'
import ListFirst from './ListFirst/ListFirst'
import ListLoading from './ListLoading/ListLoading'

export default class List extends Component {

    // 初始化时有的数据，后续根据订阅的结果更新 
    state = {
        isFirst: true,
        isLoading: false,
        isError: false,
        listItems: [] 
    }

    // 组件挂载结束之后订阅
    componentDidMount() {
        this.token = PubSub.subscribe('setData', (msg, data) => {

            // 根据订阅结果更新state
            this.setState(data);
        })
    }

    // 组件卸载了之后清除订阅
    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    render() {
        return (
            <div className="list">
                { !this.state.isFirst || <ListFirst /> }
                { !this.state.isLoading || <ListLoading /> }
                { !this.state.isError || <ListError /> }
                { !this.state.listItems.length || this.state.listItems.map(item => <ListItem key={item.id} imgUrl={item.avatar_url}/>)}
            </div>
        )
    }
}
