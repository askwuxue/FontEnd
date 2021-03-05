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

// create postsSchema  user validate(验证)
const postsSchema = new Schema({
    title: {
        type: String,
        // require: true,
        // minlength: 2,
        // maxlength: 32,
        required: [true, '该字段必须输入'],
        minlength: [2, '该字段的最小长度为2'],
        maxlength: [32, '该字段的最大长度为32']
    },
    date: {
        type: Date,
        // 如果没有赋值，会使用默认值
        // TODO 使用Date.now 最终的日期不对 并不是当前的时间
        default: Date.now
    },
    number: {
        type: Number,
        required: [true, '请输入一个整数'],
        min: [1, '可输入的最小值为1'],
        max: [9999, '可输入的最大值为9999']
    },
    category: {
        type: String,
        // input must include enum
        enum: ['html', 'css', 'javascript', 'NodeJs']
    },
    author: {
        type: String,
        // 自定义验证 
        validate: {
            validator: v => {
                // 长度大于4 返回布尔值 true: 验证成功
                return v && v.length > 4;
            }
        }
    }
})

// create CourseModel
const Course = mongoose.model('Course', courseSchema);

// create usersModel
const Users = mongoose.model('Users', usersSchema);

// create postsModel
const Posts = mongoose.model('Posts', postsSchema);

// create course document
const course = new Course({
    name: 'mongoose',
    author: 'wuxue',
    isPublished: false
});


// create new document
Course.create({ name: 'love You', author: 'xuning', isPublished: true })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

course.save();

// create new posts document
Posts.create({ title: 'firstPost', number: 2, category: 'html', author: 'askwuxue' })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

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