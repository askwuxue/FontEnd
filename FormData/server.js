const express = require('express');

const port = 3000;

const public = express.static('public');

const formidable = require('formidable');

const form = new formidable.IncomingForm();

const app = express();

app.use('/', public);

app.post('/FormData', (req, res, next) => {
    form.parse(req, (err, fields, files) => {
        console.log('fields: ', fields);
        console.log('typeod fields: ', typeof fields);

        console.log('files: ', files);
        return res.send(fields);
    })
})

app.listen(port, () => {
    console.log('express start access port is 3000')
})