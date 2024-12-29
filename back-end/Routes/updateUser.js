let express = require('express');
const router = express.Router();
const UserModel = require('../Models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



router.put('/updateProfile', async (req, res) => {
    const { username, email } = req.body; // Destructure input data
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header

    if (!token) {
        return res.status(401).send("Unauthorized: No token provided");
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.TOKEN);
        const userId = decoded.id; // Extract user ID from token

        // Prepare updated fields
        let updatedData = { username, email };
        if (password) {
            const hash = await bcrypt.hash(password, 10);
            updatedData.password = hash; // Update password only if provided
        }

        // Update user in database
        const updatedUser = await UserModel.findByIdAndUpdate(userId, updatedData, { new: true });

        if (updatedUser) {
            res.send({ success: true, message: "Profile updated successfully", data: updatedUser });
        } else {
            res.status(404).send({ success: false, message: "User not found" });
        }
    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).send({ success: false, message: "Internal server error" });
    }
});


module.exports = router