const express = require('express');

const port = 3000;

const public = express.static('public');

// TODO 如何可以设置多个静态访问地址
// const upload = express.static('upload');

const formidable = require('formidable');

const form = new formidable.IncomingForm();

const path = require('path');

// 设置文件上传的路径
form.uploadDir = path.join(__dirname + '/public' + '/upload');

// 默认文件上传后会去除后缀名。开启保留文件后缀名
form.keepExtensions = true;

const app = express();

app.use('/', public);

app.post('/FormData', (req, res, next) => {
    form.parse(req, (err, fields, files) => {

        // TODO 不加return，回调函数中使用next，认为后续还有操作，导致报错
        //  Cannot set headers after they are sent to the client
        // 解决方案 1.如下加return强制返回 2. 使用next() 继续执行
        res.send(fields);
        next();
    })
})

// 文件上传
app.post('/upload', (req, res) => {
    form.parse(req, (err, fields, files) => {
        console.log('fields: ', fields);
        console.log('typeod fields: ', typeof fields);
        // 文件上传失败
        if (err) {
            return res.send({ message: "文件上传失败" })
        }
        // 文件上传成功
        // 文件在服务器端的地址 files.file是一个对象存放了接收到的文件的相关信息
        let path = files.file.path;
        // TODO res.json() 或者res.send()接受多次请求时 报错
        //  Cannot set headers after they are sent to the client
        // 默认对象会以json的格式返回 
        res.send({ path: path });

    })

})

app.listen(port, () => {
    console.log('express start access port is 3000')
})