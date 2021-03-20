// 引入express模板
const express = require('express');

const bodyParse = require('body-parser');

// 创建实例
const app = express();

// 静态资源配置
const public = express.static('public');

// 端口设置
const port = 3001;

app.use('/', public);

app.use(bodyParse.json({ extended: true }))

// 使用get参数，如果url中有参数 依旧匹配地址课只写url的部分，不写参数
app.get('/get', (req, res) => {
    // console.log(req.url);
    // 请求url中的参数
    let urlParams = req.url.substring(req.url.indexOf('?') + 1);
    // 对请求参数切割
    let paramsArr = urlParams.split('&');
    // 请求参数对象
    let paramsObj = {};
    for (let i = paramsArr.length; i--; i < 0) {
        let temp = paramsArr[i].split('=');
        paramsObj[temp[0]] = temp[1];
    }
    // console.log('paramsObj: ', paramsObj);
    // 返回的数据
    let data = JSON.stringify({ name: "wuxue" });
    // TODO 浏览器只能接受字符串
    // res.send('get(' + data + ')');
    let resFn = `${paramsObj['callback']}(${data})`;
    res.send(resFn);
})

app.listen(port, () => {
    console.log('express server access');
});