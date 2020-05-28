const path = require('path');
const express = require('express');

const app = express();

app.use('/www', express.static(path.join(__dirname, 'www')));

app.get('/', (req, res) => res.send('Hello, Express!'));

app.listen(9000, function () {
    console.log('Example app listening on port 9000');
});
