const express = require('express');
const app = express();
const port = 4000;
const cors =require('cors');

app.use(cors());

app.use('/', express.static('public'));

const budget = require('./myBudget.json');

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:4000`)
});