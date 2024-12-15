let express = require('express');
const courseSchemaModel = require('../Models/courseSchema.model');
const reviewSchemaModel = require('../Models/reviewSchema.model');
const { isProtect } = require('../Middlewares/checkrole');
let router = express.Router();

router.post('/review-course', isProtect, async (req, res) => {
    let { _id, rating, comment } = req.body;


    let course = await courseSchemaModel.findById({ _id });

    if (!course) {
        return res.status(404).json({ message: 'Course not found' });
    }

    const alreadyReviewed = await reviewSchemaModel.findOne({
        course: _id,
        user: req.user._id,
    });

    if (alreadyReviewed) {
        return res.status(400).json({ message: 'You have already reviewed this course' });
    }

    let newReview = new reviewSchemaModel({
        course: _id,
        user: req.user._id,
        rating,
        comment,
    })
    await newReview.save();
    res.send("Sucess rating");

});

module.exports = router;