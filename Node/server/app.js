// 引入http模块
const http = require('http');

// 创建服务器对象
const app = http.createServer();
// 当客户端请求时
app.on('request', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf-8'
    })
    res.end('<h2>HI, Askwuxue</h2> 下面是一样中文');
});

// 监听端口
app.listen(3000);
console.log('server started');