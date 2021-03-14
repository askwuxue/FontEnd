// 引入express模板
const express = require('express');

const bodyParse = require('body-parser');

// 创建实例
const app = express();

// 静态资源配置
const public = express.static('public');

// 端口设置
const port = 3000;

app.use('/', public);

// app.use(bodyParse.urlencoded({ extended: true }))
// TODO必须设置服务器接收的格式
app.use(bodyParse.json({ extended: true }))

// 使用get参数，如果url中有参数 依旧匹配地址课只写url的部分，不写参数
app.get('/get', (req, res) => {

    // req.query get请求参数对象
    console.log(req.query);

    console.log(req.method);

    res.send('get ');
})

app.post('/post', (req, res) => {
    // TODO body 值为 [Object: null prototype] { name: 'wuxue', age: '25' }
    // 解决方案为将app.use(bodyParse.urlencoded({ extended: false })) 中的extended改为true
    // TODO 使用JSON.parse()接收前端的JSON.stringify()的字符串会报错 ，可能是express 进行了处理
    let body = req.body;
    res.send(req.body);
})

app.listen(port, () => {
    console.log('express server access');
});