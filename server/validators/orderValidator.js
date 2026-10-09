const { body } = require("express-validator");

const createOrderValidation = [
  body("shippingAddress")
    .isObject()
    .withMessage("Shipping address is required"),

  body("shippingAddress.fullName")
    .trim()
    .notEmpty()
    .withMessage("Full name is required"),

  body("shippingAddress.phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required"),

  body("shippingAddress.address")
    .trim()
    .notEmpty()
    .withMessage("Address is required"),

  body("shippingAddress.city")
    .trim()
    .notEmpty()
    .withMessage("City is required"),

  body("shippingAddress.postalCode")
    .trim()
    .notEmpty()
    .withMessage("Postal code is required"),
];

module.exports = {
  createOrderValidation,
};
