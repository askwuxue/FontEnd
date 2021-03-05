const mongoose = require('mongoose');
const { cursorTo } = require('readline');
const Schema = mongoose.Schema;

// crete connect
mongoose.connect('mongodb://localhost/demo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('database connect success...');
    })
    .catch((err) => {
        console.log('database connect failed....');
        console.log(err);
    })

// create courseSchema
const courseSchema = new Schema({
    name: String,
    author: String,
    isPublished: Boolean
});

// create usersSchema
const usersSchema = new Schema({
    name: String,
    age: Number,
    // Array[String] error
    hobbies: [String],
    email: String,
    password: String
});

// create CourseModel
const Course = mongoose.model('Course', courseSchema);

// create usersModel
const Users = mongoose.model('Users', usersSchema);

// create course document
const course = new Course({
    name: 'mongoose',
    author: 'wuxue',
    isPublished: false
});

// create users document


// create new document
Course.create({ name: 'love You', author: 'xuning', isPublished: true })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

course.save();

// import database
// C:\Program Files\MongoDB\Server\4.1\bin

// return a Array
// Users.find().then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// return first target type is Object
// Users.findOne().then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// return first target type is Array
// Users.find({ _id: '5c09f236aeb04b22f8460967' }).then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// return range Array &gt is '>', &lt is '<', 
// Users.find({ age: { $gt: 20, $lt: 50 } }).then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });


// return a Array hobbies includes '吃饭'
// Users.find({ hobbies: { $in: ['吃饭'] } }).then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// return a array include 'name' and 'age' not include '_id' then sort
// Users.find().select('name age -_id').sort('age').skip(1).limit().then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// delete find first target and delete that and return fined array
// Users.findOneAndDelete({ _id: '5c09f2d9aeb04b22f846096b' }).then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// delete Many target return { n: 5, ok: 1, deletedCount: 5 }
// Users.deleteMany({}).then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// find first target and update fined targeted  return update before Array
// Users.findOneAndUpdate({ name: '王五' }, { name: '改名后的王五' }).then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

Users.updateMany({}, { name: '大家的名字全部被改了' }).then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });