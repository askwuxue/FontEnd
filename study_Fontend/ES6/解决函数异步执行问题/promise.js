const fs = require('fs');
const readFile1 = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./a1.txt', 'utf8',(err, data) => {
            if (err) {
                return reject(err);
            }
            return resolve(data);
        })
    }); 
};

const readFile2 = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./b.txt', 'utf8', (err, data) => {
            if (err) {
               return reject(err);
            }
             return resolve(data);
        })
    });
};

const readFile3 = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./c1.txt', 'utf8', (err, data) => {
            if (err) {
                return reject(err); 
            }
            return resolve(data);
        })
    });
};

const readFile4 = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./d.txt', 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            return resolve(data);
        })
    });
};

// TODO 处理Promise对象的err对象是如何实现的 原理是怎么样
const run = () => {
    let p1 = readFile1()
    .then((data) => {
        console.log('a.txt read over');
        console.log(data);
        return readFile2();
    })
    .catch((err) => {
        console.log('a.txt read failed')
        console.log(err);
    })
    .then((data) => {
        console.log('b.txt read over');
        console.log(data);
        return readFile3();
    })
    .catch((err) => {
        console.log('b.txt read failed');
        console.log(err);
    })
    .then((data) => {
        console.log('c.txt read over');
        console.log(data);
        return readFile4();
    })
    .catch((err) => {
        console.log('d.txt read failed');
        console.log(err);
    })
    .then((data) => {
        console.log('d.txt read over');
        console.log(data);
    })
    .catch((err) => {
        console.log('d.txt read failed');
        console.log(err);
    })
};
run();