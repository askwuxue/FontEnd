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

    // TODO Access-Control-Allow-Origin 相当于一个白名单。需要注意的是请求包含cookie信息时，使用设置属性值为 *
    res.header('Access-Control-Allow-Origin', '*');

    // TODO 设置跨域资源共享的请求方式,为什么设置之后不生效？
    res.header('Access-Control-Allow-Methods', 'post');

    res.send("ok");
})

app.listen(port, () => {
    console.log('express server access');
});