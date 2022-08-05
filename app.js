const express = require('express');
const app = express();
const db = require('./db');
const port = 5000;
const cors = require('cors');
app.use(cors());

const AuthController = require('./controller/authController');
app.use('/api/auth',AuthController); // inside this authcontroller there are multiple routes.

app.listen(port,() => {
    console.log(`Listening on Port ${port}`);
})