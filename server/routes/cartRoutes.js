const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const { addProductToCart } = require("../controllers/cartController");
const { addToCartValidation } = require("../validators/cartValidator");
const validate = require("../middleware/validate");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  addToCartValidation,
  validate,
  addProductToCart,
);

module.exports = router;
