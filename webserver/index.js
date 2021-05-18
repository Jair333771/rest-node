require('dotenv').config();
const express = require("express");
const hbs = require('hbs');
const app = new express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);

// Static content
app.use(express.static('public'));

app.get(`/`, (req, res) => {
    res.render('home', {
        description: "Home",
        title: "This is Road Trip",
        name: "jair"
    });
});

app.get(`/generic`, (req, res) => {
    res.render('generic', {
        description: "Generic",
        title: "This is Road Trip",
        name: "jair"
    });
});

app.get(`/elements`, (req, res) => {
    res.render('elements', {
        description: "Elements",
        title: "This is Road Trip",
        name: "jair"
    });
});

app.use((req, res) => {
    res.status(400).send("Not Found");
});

app.listen(port, () => {
    console.log(`Server connected, run in port ${process.env.PORT}`)
})