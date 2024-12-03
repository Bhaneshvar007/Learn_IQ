const express = require('express');
const app = express();

const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const env = require('dotenv');
env.config();

const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URI)
    .then((data) => console.log('MongoDB Connected successfully !!', data))
    .catch((err) => console.log('Error connecting to MongoDB:', err));


app.get('/', (req, res) => {
    res.send("Hello content !!")
});

app.listen(port || 8000, console.log(`Server is running on port no ${port}`));