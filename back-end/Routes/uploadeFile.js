const express = require("express");
const router = express.Router();
const upload = require("../Middlewares/multerConfig");

// Single file upload
router.post("/upload/single", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded." });
    }   

    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    console.log(fileUrl)


    res.status(200).json({ message: "File uploaded successfully!", file: req.file });
});


module.exports = router