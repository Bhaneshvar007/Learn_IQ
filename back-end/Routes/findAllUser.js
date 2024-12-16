const express = require('express');
const User = require('../Models/user.model');
const { isProtect, checkAdminStatus } = require('../Middlewares/checkrole');
const router = express.Router();

router.get('/find-user', isProtect, checkAdminStatus('admin'), async (req, res) => {
    let user = await User.find({ role: 'user' });

    if (!user) {
        return res.send("No user found !!")
    }

    res.send(user);
});


module.exports = router; 