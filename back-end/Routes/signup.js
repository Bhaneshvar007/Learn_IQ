let express = require('express');
const router = express.Router();
const UserModel = require('../Models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



router.post('/signup', async (req, res) => {
    let { username, email, password, role } = req.body;  // destuctring the input data;

    let user = await UserModel.findOne({ email }); // check user allredy register or not

    if (user) { // if user is exists 
        res.send("User allredy exist !!");
    }
    else {  // if user is not exists , push all those data in the dataBase
        let hash = await bcrypt.hash(password, 10); // for sequrity pupose password should be a encripted

        let newUser = new UserModel({
            username,
            email,
            password: hash,
            role
        });
        await newUser.save();  // if user is successfully saved ganerating the token 
        let token = jwt.sign({ id: newUser._id, email, role }, process.env.TOKEN, { expiresIn: '24h' });
        // console.log(token);

        res.send({ token })
    }

})


module.exports = router