let express = require('express');
const User = require('../Models/user.model');
let router = express.Router();


router.post('/update-user', async (req, res) => {
    let user = await req.body;

    

})