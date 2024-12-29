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


router.put('/update-course', isProtect,  async (req, res) => {
    let { course } = req.body
    console.log(course)
});


module.exports = router;