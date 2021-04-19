// 引入express模板
const express = require('express');

const path = require('path');

const staticPath = path.join(__dirname, '/public');

// 创建实例
const app = express();

// 端口设置
const port = 5000;

app.post('/', async(req, res) => {
    console.log(req);
    console.log('request');
    res.send('server ok');
})

app.listen(port, () => {
    console.log('express server access');
});