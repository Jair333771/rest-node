const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200)
        .setHeader("Content-Type", "text/html")
        .send(`<html><meta charset='utf-8'></meta><body><h1>Home<h1><br></body></html>`);
});

app.get('/info', (req, res) => {
    res.status(200)
        .setHeader("Content-Type", "application/json")
        .send(JSON.stringify({ status: 200, message: "Estamos en la sección info" }));
});

app.get('/details', (req, res) => {
    try {
        const {city} = req.query;
        res.status(200)
            .send({
                status: 200,
                user: {
                    name: "Jair",
                    age: 30,
                    city: city.toUpperCase()
                }
            });
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/login', (req, res) => {
    console.log(req.body);
    const {user, pass} = req.body;
    if (user === 'jair' && pass == '1234') {
        res.send({status: 'OK'});
    } else {
        res.status(401).send('Access Denied!');
    }   
});

app.use((req, res) => {
    res.status(400).send("Not Found");
});

app.listen(PORT, () => {
    console.log(PORT);
});