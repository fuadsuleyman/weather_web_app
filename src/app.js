const express = require('express');
const chalk = require('../utils/chalk');
const app = express();
const port = 3000;

app.get('', (req, res) => {
    res.send('Welcome to Home page!');
});

app.get('/help', (req, res) => {
    res.send('Welcome to Help page!');
});

app.get('/about', (req, res) => {
    res.send('Wolcome to About page!');
});

app.get('/weather', (req, res) => {
    res.send('Wolcome to Weather page!');
});


app.listen(port, () => {
    console.log(chalk.warning(`This app listening at http://localhost:${port}`))
});