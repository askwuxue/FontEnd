// 引入http模块
const http = require('http');

// 引入url模块
// const url = require('url');

// 引入fs模块
const fs = require('fs');

// 创建服务器对象
const app = http.createServer();

// 获取url参数并对象化
const getQuery = (url) => {
    const paramObj = {};
    if (url.indexOf('?') != -1) {
        let paramStr = url.substring(url.indexOf('?') + 1);
        let paramArr = paramStr.split('&');
        paramArr.forEach(item => {
            const param = item.split('=');
            paramObj[param[0]] = param[1];
        });
    }
    return paramObj;
};

/*
 * 根据资源类型设置头部
 * status 响应码
 * url url
 */
const setHead = (res, status, url) => {

    // html
    let htmlRegex = /(.html)$/;

    //javascript 
    let jsRegex = /(.js)$/;

    // css 
    let cssRegex = /(.css)$/;

    if (htmlRegex.test(url)) {
        res.writeHead(status, {
            'content-type': 'text/html;charset=utf-8'
        })
    }
    if (jsRegex.test(url)) {
        res.writeHead(status, {
            'content-type': 'application/javascript;charset=utf-8'
        });
    }
    if (cssRegex.test(url)) {
        res.writeHead(status, {
            'content-type': 'text/css;charset=utf-8'
        });
    }

    // 以上都不满足 使用默认头部
    res.writeHead(status, {
        'content-type': 'text/html;charset=utf-8'
    })
};

// 将请求返回
const responseFn = (res, url) => {
    // 读取服务器的index文件 并将文件返回给客户端 
    fs.readFile(`${__dirname}${url}`, 'utf8', (err, data) => {

        // 请求资源失败
        if (err) {
            setHead(res, 404, url);

            // TODO 必须使用res.end() 来结束本次的返回 否则设置头部没有意义
            res.end('404......');

            // TODO 使用throw 将err抛出，将导致执行意外停止 会影响下面的执行 所以只是简单打印，最好使用一个
            // 错误处理函数来对异常进行处理 
            // throw err;

            console.log(err);

        }
        setHead(res, 200, url);
        res.end(data);
    });
}

// 当客户端请求时
app.on('request', (req, res) => {

    // 获取请求方式
    let reqMethod = req.method.toLowerCase().trim();

    // 根据请求方式进行处理
    switch (reqMethod) {

        // get 请求
        case 'get':
            {
                let url = req.url.toLowerCase();

                // 设置可访问标识 为true代表是可访问标识
                let flag = false;
                // 当请求的是index.html时
                // html中包含了js css 对应的请求方式也是get
                if (url === '/' || url === '/index.html') {
                    console.log(url);
                    flag = true;
                    responseFn(res, '/index.html');
                }

                // 请求css source
                let cssRegex = /[a-zA-z0-9\/]{1,}(.css)$/;
                if (cssRegex.test(url)) {
                    flag = true;
                    responseFn(res, url);
                }

                // 请求JavaScript source
                let jsRegex = /(.js)$/;
                if (jsRegex.test(url)) {
                    flag = true;
                    responseFn(res, url);
                }

                // 返回以上之外的地址时 .认为是非合法地址
                if (!flag) {
                    setHead(res, 404, url);
                    res.end('您访问的地址不存在.......');
                }

                // console.log(url);
                getQuery(url);
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
                break;
            }
    }
});

// 监听端口
app.listen(3000);
console.log('server started');