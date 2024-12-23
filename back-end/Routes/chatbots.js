const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
let router = express.Router();

// Initialize the Generative AI client with your API key
const genAI = new GoogleGenerativeAI({
    apiKey: 'AIzaSyB0y4Tb_etpZeQhZ_GvL5F4qokBdfbBAx4', // Replace with your actual API key
});


// Route to handle AI prompt
router.post("/chat", async (req, res) => {
    const { message } = req.body; // Get the messages from the request body
    console.log(req.body, "hehe");

    const genAI = new GoogleGenerativeAI('AIzaSyB0y4Tb_etpZeQhZ_GvL5F4qokBdfbBAx4');
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(message);

    res.send({ result: result.response.text() })

});

module.exports = router;