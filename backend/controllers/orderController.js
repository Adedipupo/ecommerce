import asyncHandler from "express-async-handler";

import OrderModel from "../models/orderModel.js"

export const addOrderItems = asyncHandler(async (req, res) => {
  console.log(req.body);
  const {
    orderItems,
    shippingAddress,
    PaymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
    return;
  } else {
      const order = new OrderModel({
        orderItems,
        user: req.user._id,
        shippingAddress,
        PaymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      });

      const createOrder = await order.save();
      res.status(201).json(createOrder);
  }
});
