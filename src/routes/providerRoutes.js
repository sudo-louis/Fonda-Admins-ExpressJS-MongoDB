const express = require("express");
const { createProvider } = require("../controllers/providerController");
const verifyAdminToken = require("../middleware/adminAuthMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/", verifyAdminToken, upload.single("image"), createProvider);

module.exports = router;