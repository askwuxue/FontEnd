import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {
    
    getUserInfo = (e) => {

        // 用户按下回车 
        // TODO 对象的解构赋值
        let { keyCode } = e;
        if (keyCode === 13) {

            // 对象的解构赋值
            let { target: { value } } = e;

            // 当用户开始了检索，状态立马切换为loading状态，所以此处要发布
            PubSub.publish('setData', {
                isFirst: false,
                isLoading: true,
                isError: false,
                listItems: [] 
            });

            console.log(`当前的请求是：http://localhost:3000/api1/users?q=${value}`);

            // TODO 相当于请求了代理，然后代理(参考src/setupProxy.js)通过代理发送请求
            axios.get(`http://localhost:3000/api1/users?q=${value}`,
                {}
            )
            .then(res => {
                console.log(res);
                if (res.status === 200) {

                    // 成功请求到数据，更新数据，再次发布
                    PubSub.publishSync('setData', {
                        isFirst: false,
                        isLoading: false,
                        isError: false,
                        listItems: res.data 
                    })
                }
            }, error => {
                // 服务器错误时
                PubSub.publishSync('setData', {
                    isFirst: false,
                    isLoading: false,
                    isError: true,
                    listItems: [] 
                })
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
