let express = require('express');
const router = express.Router();
const courseSchemaModel = require('../Models/courseSchema.model');
const { isProtect, checkRoleFn, checkAdminStatus } = require('../Middlewares/checkrole');


router.delete('/delete-course/:id', isProtect, checkAdminStatus(['admin']), async (req, res) => {
    const { id } = req.params;

    try {
        const course = await courseSchemaModel.findByIdAndDelete(id);

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


router.put('/update-course', isProtect, checkRoleFn(['admin', 'instructor']), async (req, res) => {
    const courseData = req.body;

    if (!courseData._id) {
        return res.status(400).send({ success: false, message: "Course ID is required" });
    }


    try {
        // Find and update the course by ID
        const updatedCourse = await courseSchemaModel.findByIdAndUpdate(
            courseData._id, // Use the course ID
            courseData, // Update fields
            { new: true } // Return the updated document
        );

        console.log(updatedCourse,"kjbdsf")

        if (!updatedCourse) {
            return res.status(404).send({ success: false, message: "Course not found" });
        }

        res.send({ success: true, message: "Course updated successfully", data: updatedCourse });
    } catch (error) {
        console.error("Error updating course:", error);
        res.status(500).send({ success: false, message: "Internal server error", error: error.message });
    }
});


module.exports = router;