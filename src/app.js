const express = require('express');
const path = require('path');
const chalk = require('../utils/chalk');
const app = express();
const port = 3000;

// define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewspath = path.join(__dirname, '../templates');

// setup handlebars engine and customize views location
app.set('view engine', 'hbs');
app.set('views', viewspath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        header: 'Welcome to Home Page!'
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
        topic: 'Change Catrich'
    })
})

app.get('/weather', (req, res) => {
    res.render('weather', {
        title: 'Weather page',
        header: 'Welcome to Weather page!',
        location: 'Baku, Azerbaijan',
        forecast: 'Mostly cloudy'
    })
});


app.listen(port, () => {
    console.log(chalk.warning(`This app listening at http://localhost:${port}`))
});