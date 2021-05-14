const express = require('express');
const apiV1 = require('./routes/v1');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

apiV1(app);

app.listen(PORT, () => {});