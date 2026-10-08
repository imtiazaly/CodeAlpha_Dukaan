const { addToCart } = require("../services/cartService");

const addProductToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const cart = await addToCart(req.user.userId, productId, quantity);

    res.status(200).json({
      message: "Product added to cart",
      cart,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  addProductToCart,
};
