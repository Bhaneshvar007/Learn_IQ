const multer = require("multer");
const path = require("path");

// Configure Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads"); // Specify the directory to save files
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()
            } - ${file.originalname}`;
        cb(null, uniqueName); // Generate a unique name for each file
    },
});

// // File type validation
// const fileFilter = (req, file, cb) => {
//     const allowedTypes = ["image/jpeg", "image/png", "video/mp4", "video/mkv"];
//     if (allowedTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(new Error("Invalid file type. Only images and videos are allowed."), false);
//     }
// };

// Initialize Multer
const upload = multer({
    storage,
    limits: { fileSize: 100 * 1024 * 1024 }, // Limit: 100MB
});

module.exports = upload;