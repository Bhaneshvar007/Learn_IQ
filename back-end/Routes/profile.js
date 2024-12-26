let express = require('express');
const router = express.Router();
const UserModel = require('../Models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



router.get('/profile', async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header

    if (!token) {
        return res.status(401).send("Unauthorized: No token provided");
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.TOKEN);
        const userId = decoded.id; // Extract user ID from token

        // Fetch user data from the database
        const user = await UserModel.findById(userId).select("-password"); // Exclude password

        if (user) {
            res.send(user); // Send user data as response
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).send("Internal server error");
    }
});


module.exports = router