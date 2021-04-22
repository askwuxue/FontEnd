import React, { Component } from 'react'
// import qs from 'querystring';

export default class Detail extends Component {
    render() {
        // console.log(this.props);
       
        // 1. 接受路由组件传递的params参数
        // const {id: paramId, msg: paramMsg} = this.props.match.params;

        // 2. 接受到的是search传递的参数 必须先处理一下。然后将字符串转成键值对的对象
        // const paramsStr = this.props.location.search.slice(1);
        // const paramsObj = qs.parse(paramsStr);

        // 3. 接受传递过来state的参数 因为缓存被清除之后history.location.state会被清除 所以必须给定默认值 否则读不到会报错
        const {id, msg} = this.props.location.state || {};
        return (
            <div>
                {/* 1 */}
                {/* <p>当前的ID是: {paramId}</p>
                <p>当前日历显示的是: {paramMsg}</p> */}

                {/* 2 */}
                {/* <p>当前的ID是: {paramsObj.id}</p>
                <p>当前日历显示的是: {paramsObj.msg}</p> */}

                {/* 3 注意state是被保存在history对象中的 如果缓存被清除的话 是读不到当前的id等值 */}
                <p>当前的ID是: {id}</p>
                <p>当前日历显示的是: {msg}</p>
            </div>
        )
    }
}
