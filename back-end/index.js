const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');



// Midllewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());


const env = require('dotenv');
env.config();


const signup = require('./Routes/signup')
const login = require('./Routes/login')
const forget = require('./Routes/forget');
const reset = require('./Routes/reset');
const course = require('./Routes/course');

const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected successfully !!'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));




// signup page
app.use('/api', signup);


// // Login page
app.use('/api', login);


//forget passwprd
app.use('/api', forget);

// Reset password
app.use('/api', reset);



// Course api
app.use('/api' , course)



app.get('/api/reset-password/fbfe2cf12fae50f460f7a5d573e8db8f9233801d', (req, res) => {
    res.send("hello")
})

app.get('/', (req, res) => {
    res.send("Hello content !!")
});

app.listen(port, console.log(`Server is running on port no ${port}`));