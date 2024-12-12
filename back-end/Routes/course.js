const express = require('express');
const courseSchemaModel = require('../Models/courseSchema.model');
const checkRoleFn = require('../Middlewares/checkrole');
const router = express.Router();


router.post('/course', checkRoleFn(['admin', 'instructor']), async (req, res) => {
    let course = req.body;

    // console.log(course);

    let newCourse = new courseSchemaModel({
        title: course.title,
        description: course.description,
        category: course.category,
        price: course.price,
        level: course.level,
        language: course.language,
        status: course.status,
        video: course.video,
        resources: course.resources
    });

    await newCourse.save();
    // console.log('data saved');
    res.send("sucess");

});

router.get('/get-course', async (req, res) => {

    let newCourse = await courseSchemaModel.find();
    res.send(newCourse);
})

module.exports = router
