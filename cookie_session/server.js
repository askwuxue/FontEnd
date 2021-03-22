const express = require('express');

const port = 3000;

const public = express.static('public');

const app = express();

app.use('/', public);

app.get('/get', (req, res, next) => {

    res.header('set-cookie', 'wuxu=1314995;')

    res.send('ok');
})

app.listen(port, () => {
    console.log('express start access port is 3000')
})