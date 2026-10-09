const mongoose = require("mongoose");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Product = require("../models/Product");

const createOrder = async (userId, shippingAddress) => {
  const session = await mongoose.startSession();

  try {
    let createdOrder;

    await session.withTransaction(async () => {
      const cart = await Cart.findOne({ user: userId }).session(session);

      if (!cart || cart.items.length === 0) {
        throw new Error("Cart is empty");
      }

      const orderItems = [];
      let totalAmount = 0;

      for (const cartItem of cart.items) {
        const product = await Product.findById(cartItem.product).session(
          session,
        );

        if (!product) {
          throw new Error("A product in your cart no longer exists");
        }

        if (product.stock < cartItem.quantity) {
          throw new Error(`Insufficient stock for ${product.name}`);
        }

        const updatedProduct = await Product.findOneAndUpdate(
          {
            _id: product._id,
            stock: { $gte: cartItem.quantity },
          },
          {
            $inc: { stock: -cartItem.quantity },
          },
          {
            new: true,
            session,
          },
        );

        if (!updatedProduct) {
          throw new Error(`Insufficient stock for ${product.name}`);
        }

        orderItems.push({
          product: product._id,
          name: product.name,
          price: product.price,
          quantity: cartItem.quantity,
          image: product.image,
        });

        totalAmount += product.price * cartItem.quantity;
      }

      const [order] = await Order.create(
        [
          {
            user: userId,
            items: orderItems,
            shippingAddress,
            totalAmount,
          },
        ],
        { session },
      );

      cart.items = [];
      await cart.save({ session });

      createdOrder = order;
    });

    return createdOrder;
  } finally {
    await session.endSession();
  }
};

module.exports = {
  createOrder,
};
