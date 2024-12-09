let express = require('express');
const router = express.Router();
const UserModel = require('../Models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



router.post('/signup', async (req, res) => {
    let { username, email, password, role } = req.body;

    let user = await UserModel.findOne({ email });

    if (user) {
        res.send("User allredy exist !!")
    }
    else {
        let hash = await bcrypt.hash(password, 10);
        console.log(hash);

        let newUser = new UserModel({
            username,
            email,
            password: hash,
        });
        await newUser.save();
        let token = jwt.sign({ email, role }, process.env.TOKEN, { expiresIn: '1h' });
        console.log(token);

        res.send('Acc created Sucessfully !!')
    }

})


module.exports = router