const mongoose = require('mongoose');

const util = require('util');

const fs = require('fs');

const readFile = util.promisify(fs.readFile);

// Schema
const Schema = mongoose.Schema;

// 创建模式
const citySchema = new Schema({
    // city
    city: {
        type: [Array],
    }
})

// 创建Model
const City = mongoose.model('City', citySchema);

City.find({ _id: "60521c38a822cd45a0bc0484" }, (err, data) => {
    console.log(data.length);
});

// 创建一个文档
// Users.create({
//         name: 'wuxue',
//         age: 24,
//         hobbies: ['red book', 'basketball', 'movie'],
//         email: '972523419@qq.com'
//     }).then(data => {
//         console.log('create data access......');
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('create data failed......');
//         console.log(err);
//     })

// mongoimport -d City -c city --file .\city.json

// TODO 使用model.exports.Users 的区别
// let readPromise = readFile('./model/city.json', 'utf8');
// // let readData = {};
// readPromise.then((data) => {
//     // module.exports = JSON.stringify(data);
//     readData = data;
//     // console.log('readData: ', readData);
// })

// module.exports = readData;