const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const {
  addProductToCart,
  getUserCart,
} = require("../controllers/cartController");
const { addToCartValidation } = require("../validators/cartValidator");
const validate = require("../middleware/validate");

const router = express.Router();

router.get("/", authMiddleware, getUserCart);
router.post(
  "/",
  authMiddleware,
  addToCartValidation,
  validate,
  addProductToCart,
);

module.exports = router;
