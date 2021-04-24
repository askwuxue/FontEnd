import React, { Component } from 'react'
// import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {
    
    getUserInfo = async (e) => {
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
            
            //#region TODO 使用axios 发送请求，本质XHR 
            // TODO 相当于请求了代理，然后代理(参考src/setupProxy.js)通过代理发送请求
            // axios.get(`http://localhost:3000/api1/users?q=${value}`,
            //     {}
            // )
            // .then(res => {
            //     console.log(res);
            //     if (res.status === 200) {

            //         // 成功请求到数据，更新数据，再次发布
            //         PubSub.publishSync('setData', {
            //             isFirst: false,
            //             isLoading: false,
            //             isError: false,
            //             listItems: res.data 
            //         })
            //     }
            // }, error => {

            //     // 服务器错误时
            //     PubSub.publishSync('setData', {
            //         isFirst: false,
            //         isLoading: false,
            //         isError: true,
            //         listItems: [] 
            //     })
            //     console.log(error);
            // })
            //#endregion
            
            //#region 使用fetch 未优化版
            // 使用fetch 发送请求 和HXR不同
            // 当接收到一个代表错误的 HTTP 状态码时，从 fetch() 返回的 Promise 
            // 不会被标记为 reject， 即使响应的 HTTP 状态码是 404 或 500。相反，
            // 它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的
            // ok 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。
            // fetch(`http://localhost:3000/api1/users?q=${value}`)
            //     .then(res => {

            //         // res是一个HTTP响应 但是不包含响应体 
            //         console.log(res);

            //         // 请求正常返回
            //         if (res.ok) {

            //             // 返回一个promise对象 该对象包含响应结果
            //             return res.json()
            //         }

            //         // 网络故障或者请求被阻止了
            //         throw new Error('Network response was not ok.');
            //     })
            //     .then(myJson => {

            //         // 返回的时data数据
            //         console.log(myJson);
            //     })

            //     // 捕获错误
            //     .catch(err => {
            //         console.log('There has been a problem with your fetch operation: ', err.message)
            //     })

            //#endregion
            
            // 对网络请求中出现的错误进行处理
            try {
                // fetch 返回的是一个Promise对象
                let  res = await fetch(`http://localhost:3000/api1/users?q=${value}`);

                // res.json() 也返回了一个promise 等到执行完成返回结果了然后拿到data
                let data = await res.json();

                PubSub.publish('setData', {
                    isFirst: false,
                    isLoading: false,
                    isError: false,
                    listItems: data 
                });
            } catch (err) {
                PubSub.publish('setData', {
                    isFirst: false,
                    isLoading: false,
                    isError: true,
                    listItems: [] 
                });
            }
        }
    }

    render() {
        return (
            <div>
                <h3>请输入Github用户名</h3>
                <div className="input-group input-group-lg">
                    <input type="text" onKeyUp={this.getUserInfo}  className="form-control" placeholder="输入信息，按下回车搜索" aria-describedby="sizing-addon1" />
                </div>
            </div>
        )
    }
}
