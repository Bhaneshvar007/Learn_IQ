const express = require('express');
const courseSchemaModel = require('../Models/courseSchema.model');
const { checkRoleFn, isProtect } = require('../Middlewares/checkrole');
const User = require('../Models/user.model');
const { sendEmail } = require('../Utils/sendEmail');
const router = express.Router();


router.post('/course', isProtect, checkRoleFn(['admin', 'instructor']), async (req, res) => {
    let course = req.body;

    // console.log(course);

    try {
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
        const users = await User.find().select('email -_id');

        const emailList = users.map((user) => user.email);
        // console.log(emailList, "emaill");



        const subject = `New Course Added: ${course.title}`;
        const text = `
            Hello,

        A new course titled "${newCourse.title}" has been added to our platform.

       Category: ${newCourse.category}
       Price: $${newCourse.price}
       Level: ${newCourse.level}
       Language: ${newCourse.language}

      Check it out on our website!

      Regards,
      Your Platform Team
      `;


        for (const email of emailList) {
            // console.log(subject, text);


            await sendEmail(email, subject, text);

        }

        res.status(201).json({ message: 'Course created successfully', course });
    } catch (error) {
        res.status(500).json({ message: 'Error creating course', error: error.message });
    }

});

router.get('/get-course', async (req, res) => {

    let newCourse = await courseSchemaModel.find();
    res.send(newCourse);
})

module.exports = router
