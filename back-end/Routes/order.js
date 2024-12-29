let express = require('express');
let User = require('../Models/user.model')
let router = express.Router()
const bcrypt = require('bcrypt');
const orderModel = require('../Models/orderModel');
const courseSchemaModel = require('../Models/courseSchema.model');
router.post('/order', async (req, res) => {
    try {
        let { id } = req.body;

        // Find the course data by ID
        let orderData = await courseSchemaModel.findById(id);
        if (!orderData) {
            return res.status(404).send("Course not found!");
        }

        // console.log(orderData, "data");

        // Create a new order with the found course data
        let newData = new orderModel({
            title: orderData.title,
            description: orderData.description,
            category: orderData.category,
            price: orderData.price,
            videos: orderData.videos,
        });

        // Save the order to the database
        await newData.save();

        // Send the newly created order data to the frontend
        res.status(201).json({
            message: "Order saved successfully!",
            order: newData,
        });
    } catch (error) {
        console.error("Error processing order:", error);
        res.status(500).send("An error occurred while processing the order.");
    }
});





module.exports = router;