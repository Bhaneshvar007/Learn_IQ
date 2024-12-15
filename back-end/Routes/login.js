const express = require('express');
const router = express.Router();
const User = require("../Models/user.model");
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');


router.post('/login', async (req, res) => {

    let loginData = req.body;  // getting the data from the input
    let data = await User.findOne({ email: loginData.email }); // find is user is exist or not


    if (data) {  // if use is exists compaire password is correct or not
        let checkPass = await bcrypt.compare(loginData.password, data.password);
        if (checkPass) {
            // if password is correct ganerate the token based on the their email and role
            let token = jwt.sign({ id: data._id, email: data.email, role: data.role }, process.env.TOKEN, { expiresIn: '1h' });
            // console.log(token);

            res.send({ token });
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