const express = require('express');
const app = express();

const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());

const env = require('dotenv');
env.config();


const signup = require('./Routes/signup')
const login = require('./Routes/login')
const forget = require('./Routes/forget')

const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected successfully !!'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));




// signup page
app.use('/api', signup);


// // Login page
app.use('/api', login);


//paswword passwprd
app.use('/api' , forget)

app.get('/', (req, res) => {
    res.send("Hello content !!")
});

app.listen(port , console.log(`Server is running on port no ${port}`));