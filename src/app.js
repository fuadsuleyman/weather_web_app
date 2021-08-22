const express = require('express');
const chalk = require('../utils/chalk');
const app = express();
const port = 3000;

app.get('', (req, res) => {
    res.send('<h1>Welcome to Home page!</h1>');
});

app.get('/help', (req, res) => {
    res.send({
        name: 'Fuad',
        surename: 'Suleymanov',
        type: 'problem solving'
    });
});

app.get('/about', (req, res) => {
    res.send('<h1>Wolcome to About page!</h1>');
});

app.get('/weather', (req, res) => {
    res.send({
        location: 'Baku',
        forecast: 'Mostly cloudy'
    });
});


app.listen(port, () => {
    console.log(chalk.warning(`This app listening at http://localhost:${port}`))
});