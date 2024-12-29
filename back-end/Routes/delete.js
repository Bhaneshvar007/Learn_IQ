// Import necessary modules
const express = require('express');
const router = express.Router();
const { isProtect } = require('../Middlewares/checkrole');
const User = require('../Models/user.model');

// DELETE: Delete user by ID
router.delete('/delete-user/:id', isProtect, async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the user by ID
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
