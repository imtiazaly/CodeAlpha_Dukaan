const { createOrder } = require("../services/orderService");

const placeOrder = async (req, res) => {
  try {
    const order = await createOrder(req.user.userId, req.body.shippingAddress);

    return res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    const clientErrors = [
      "Cart is empty",
      "A product in your cart no longer exists",
    ];

    if (
      clientErrors.includes(error.message) ||
      error.message.startsWith("Insufficient stock for ")
    ) {
      return res.status(400).json({
        message: error.message,
      });
    }

    console.error("Place order error:", error);

    return res.status(500).json({
      message: "Failed to place order",
    });
  }
};

module.exports = {
  placeOrder,
};
