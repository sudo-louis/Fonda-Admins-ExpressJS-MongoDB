const express = require("express");
const { createProduct } = require("../controllers/productController");
const verifyAdminToken = require("../middleware/adminAuthMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/", verifyAdminToken, upload.single("image"), createProduct);

module.exports = router;