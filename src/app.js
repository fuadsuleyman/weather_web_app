const express = require('express');
const path = require('path');
const chalk = require('../utils/chalk');
const app = express();
const hbs = require('hbs');
const port = 3000;

// define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewspath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// setup handlebars engine and customize views location
app.set('view engine', 'hbs');
app.set('views', viewspath);
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather page',
        header: 'Welcome to Weather!',
        location: 'Baku, Azerbaijan',
        forecast: 'Mostly cloudy',
        name: 'Fuad S.'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        header: 'Welcome to About Page!',
        name: 'Fuad S.'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        header: 'Welcome to Help Page!',
        type: 'Help Desk',
        topic: 'Change Catrich',
        name: 'Fuad S.'
    })
})


app.listen(port, () => {
    console.log(chalk.warning(`This app listening at http://localhost:${port}`))
});