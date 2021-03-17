// 引入express模板
const express = require('express');

const path = require('path');

const fs = require('fs');

const util = require('util');

const readFile = util.promisify(fs.readFile);

const staticPath = path.join(__dirname, '/public');

const public = express.static(staticPath);

// 导入数据库连接
// require('./model');

// let readJson = require('./model/city');

// 创建实例
const app = express();

// 端口设置
const port = 3000;

app.use('/', public);

// 使用get参数，如果url中有参数 依旧匹配地址课只写url的部分，不写参数
app.get('/get', async(req, res) => {
    let readPromise = readFile('./model/city.json', 'utf8');
    let readData = await readPromise;

    // TODO 这个地方使用Promise.then为readData赋值会失败
    // let readData = {};
    // readPromise.then((data) => {
    //     readData = data;
    //     console.log('readData: ', readData);
    // })

    res.send(readData);
})

app.listen(port, () => {
    console.log('express server access');
});