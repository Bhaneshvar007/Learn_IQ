let express = require('express');
let User = require('../Models/user.model')
let router = express.Router()
const bcrypt = require('bcrypt');




router.post('/reset-password/:token', async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    console.log(password);
    


    try {
        const user = await User.findOne({
            resetToken: token,
            resetTokenExpiry: { $gt: Date.now() },
        });

        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        user.resetToken = undefined;
        user.resetTokenExpiry = undefined;
        await user.save();

        res.status(200).send('Password reset successfully')

    } catch (error) {
        res.status(500).send('Error resetting password: ' + error.message);
    }
})

module.exports = router;    