const express = require('express');
const app = express();
const db = require('./db');
let dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT || 9700;
const cors = require('cors');
app.use(cors());

const AuthController = require('./controller/authController');

app.get("/", (req, res) => {
    res.send("Express server is running");
  });
app.use('/api/auth',AuthController); //  inside this authcontroller there are multiple routes.

app.listen(port,() => {
    console.log(`Listening on Port https://localhost:${port}`);
})