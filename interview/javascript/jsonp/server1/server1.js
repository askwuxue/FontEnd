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

app.use(bodyParse.json({ extended: true }))

// 使用get参数，如果url中有参数 依旧匹配地址课只写url的部分，不写参数
app.get('/get', (req, res) => {

    // req.query get请求参数对象
    // console.log(req.query);
    let data = 'servername ';
    res.send('get(data)');
})

app.post('/post', (req, res) => {
    // 解决方案为将app.use(bodyParse.urlencoded({ extended: false })) 中的extended改为true
    let body = req.body;
    res.send(req.body);
})

app.listen(port, () => {
    console.log('express server access');
});