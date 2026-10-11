const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
  createProduct,
  getProducts,
  getProductById,
} = require("../controllers/productController");

const router = express.Router();

router.post("/", authMiddleware, adminMiddleware, createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;
