const express = require('express');
const router = express.Router();
const User = require("../Models/user.model");
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');


router.post('/login', async (req, res) => {


    let loginData = req.body;
    let data = await User.findOne({ email: loginData.email })

    
    if (data) {
        let checkPass = await bcrypt.compare(loginData.password, data.password);
        if (checkPass) {

            let token = jwt.sign({ email: data.email, role: data.role }, process.env.TOKEN, { expiresIn: '1h' });
            // console.log(token);

            res.send({ token })
        }
        else {
            res.send('Invailid passworddd !!')
        }
    }
    else {
        res.send("You don't have an any account")
    }
});



module.exports = router