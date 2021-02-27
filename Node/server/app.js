// 引入http模块
const http = require('http');
// 引入url模块
// const url = require('url');

// 创建服务器对象
const app = http.createServer();
// 当客户端请求时
app.on('request', (req, res) => {

    // 获取请求方式
    let reqMethod = req.method.toLowerCase().trim();

    // 根据请求方式进行处理
    switch (reqMethod) {
        case 'get':
            {
                let url = req.url;
                console.log(url);
                break;
            }
        case 'post':
            {
                let postData = '';
                req.on('data', chunk => postData += chunk);
                req.on('end', () => {
                    console.log('post请求结束.......... ');
                    console.log(postData);
                })
            }
    }
    // get 请求
    // if (req === 'get') {
    //     // 获取请求地址
    //     let url = req.url;
    //     console.log(url);
    //     // let parm = req.slice('?');
    // } else if()

    res.writeHead(200, {
        'content-type': 'text/html;charset=utf-8'
    })
    res.end('<h2>HI, Askwuxue</h2> 下面是一样中文');
});

// 监听端口
app.listen(3000);
console.log('server started');