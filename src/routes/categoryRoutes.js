const express = require("express");
const { createCategory } = require("../controllers/categoryController");
const verifyAdminToken = require("../middleware/adminAuthMiddleware");

const router = express.Router();

router.post("/", verifyAdminToken, createCategory);

module.exports = router;