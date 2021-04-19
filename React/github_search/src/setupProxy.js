 const proxy = require('http-proxy-middleware');

 module.exports = function(app) {
    app.use(
        // 将发送给代理(http://localhost:3000/api1)的请求被接收到，然后proxy进行处理并转发
        // 然后访问到了'http://localhost:5000'(github_search_server中新建的服务器)
        // http://localhost:5000是模拟了代理之后的另一台服务器,它再去请求源站或直接返回数据
        // 顺序如下 浏览器发起请求--->被proxy拦截并进行转发(因为是发送给代理的被检测到了)-->
        // --->访问到了http://localhost:5000，该服务器进行判断处理，直接请求源站或直接返回数据
        proxy('/api1', {
            // target: 'http://localhost:5000',
            target: 'https://api.github.com/',
            changeOrigin: true,
            pathRewrite: {'^/api1': ''}
        })
    )
 }