const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

const { createOrderValidation } = require("../validators/orderValidator");

const { placeOrder, getUserOrders } = require("../controllers/orderController");

const router = express.Router();

router.post("/", authMiddleware, createOrderValidation, validate, placeOrder);
router.get("/my-orders", authMiddleware, getUserOrders);

module.exports = router;
