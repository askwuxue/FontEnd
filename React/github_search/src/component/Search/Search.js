import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {

    getUserInfo = (e) => {
        // console.log(e.keyCode);
        // 用户按下回车 
        // TODO 对象的解构赋值
        let { keyCode } = e;
        if (keyCode === 13) {
            // 对象的解构赋值
            let { target: { value } } = e;
            console.log(value);
            // TODO 相当于请求了代理，然后代理(参考src/setupProxy.js)通过代理发送请求
            axios.get(`http://localhost:3000/api1/users?q=${value}`,
                {}
            )
            .then(response => {
                console.log(response);
            }, error => {
                console.log(error);
            })
        }
    }

    render() {
        return (
            <div>
                <h3>请输入Github用户名</h3>
                <div className="input-group input-group-lg">
                    {/* <span className="input-group-addon" id="sizing-addon1">@</span> */}
                    <input type="text" onKeyUp={this.getUserInfo}  className="form-control" placeholder="输入信息，按下回车搜索" aria-describedby="sizing-addon1" />
                </div>
            </div>
        )
    }
}
