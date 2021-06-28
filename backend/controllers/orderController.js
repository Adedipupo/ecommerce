import asyncHandler from "express-async-handler";

import OrderModel from "../models/orderModel.js"

export const addOrderItems = asyncHandler(async (req, res) => {
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

export const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await OrderModel.find({})

  if (orders) {
    res.status(200).json(orders)
  } else {
    res.status(404).json(`No Order Found`)
  }
});

export const getOrderById = asyncHandler(async (req, res) => {
  const order = await OrderModel.findById(req.params.id).populate('user','name email');
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error(`Order not Found`);
  }
});

export const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await OrderModel.findById(req.params.id)

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updatedOrder = await order.save()
    res.status(200).json(updatedOrder);
  } else {
    res.status(404);
    throw new Error(`Order not Found`);
  }
});

export const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await OrderModel.find({ user: req.user._id })
  res.status(200).json(orders)
})

export const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await OrderModel.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();
    res.status(200).json(updatedOrder);
  } else {
    res.status(404);
    throw new Error(`Order not Found`);
  }
});