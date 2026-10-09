const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

const { createOrderValidation } = require("../validators/orderValidator");

const { placeOrder } = require("../controllers/orderController");

const router = express.Router();

router.post("/", authMiddleware, createOrderValidation, validate, placeOrder);

module.exports = router;
