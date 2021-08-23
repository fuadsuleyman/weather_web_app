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
        header: 'Weather',
        name: 'Fuad S.'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        header: 'About Page',
        name: 'Fuad S.'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        header: 'Help Page',
        type: 'Help Desk',
        topic: 'Change Catrich',
        name: 'Fuad S.'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send('Address must provided!');
    }
    res.send({
        location: 'Baku',
        forecast: 'Mostly Cloudy',
        address: req.query.address
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 Not Found',
        error: 'Help article found 404',
        name: 'Fuad S.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404 Not Found',
        error: 'Page not found 404',
        name: 'Fuad S.'
    })
})

app.listen(port, () => {
    console.log(chalk.warning(`This app listening at http://localhost:${port}`))
});