const express = require("express");
const {getProducts, createProduct, updateProduct, deleteProduct  } = require("../controllers/productController");
const verifyAdminToken = require("../middleware/adminAuthMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/", verifyAdminToken, upload.single("image"), createProduct);
router.get("/", verifyAdminToken, getProducts);
router.put("/:id", verifyAdminToken, upload.single("image"), updateProduct);
router.delete("/:id", verifyAdminToken, deleteProduct);

module.exports = router;