const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/City', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('mongodb connect access....')
    })
    .catch(err => {
        console.log('mongodb connect failed.....');
        console.log(err);
    })