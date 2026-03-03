const express = require("express")
const router = express.Router();

const upload = require("../middleware/uploadMiddleware")
const { protect } = require("../middleware/authMiddleware")
const { uploadFile } = require("../controller/uploadController")

router.post("/",protect, upload.single("file"), uploadFile)

module.exports = router