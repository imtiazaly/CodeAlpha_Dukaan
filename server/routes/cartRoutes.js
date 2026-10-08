const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const {
  addProductToCart,
  getUserCart,
  updateCartProduct,
  removeProductFromCart,
} = require("../controllers/cartController");
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
router.get("/", authMiddleware, getUserCart);
router.put("/item", authMiddleware, updateCartProduct);
router.delete("/item", authMiddleware, removeProductFromCart);

module.exports = router;
