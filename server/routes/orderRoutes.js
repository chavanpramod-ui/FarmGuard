const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

const isDbConnected = () => {
  return require('mongoose').connection.readyState === 1;
};

// In-memory store for orders if local DB not connected
let memoryOrders = [];

// POST create new order
router.post('/', async (req, res) => {
  try {
    const { customerName, phone, villageTown, districtState, pinCode, items, totalAmount, paymentMethod, notes } = req.body;

    if (!customerName || !phone || !villageTown || !districtState || !items || items.length === 0) {
      return res.status(400).json({ error: "Please fill all required customer and order details" });
    }

    if (isDbConnected()) {
      try {
        const newOrder = new Order({
          customerName,
          phone,
          villageTown,
          districtState,
          pinCode,
          items,
          totalAmount,
          paymentMethod: paymentMethod || 'COD',
          notes
        });
        const saved = await newOrder.save();
        return res.status(201).json({
          success: true,
          message: "Order placed successfully!",
          orderId: saved._id,
          order: saved
        });
      } catch (dbErr) {
        console.warn("DB save failed, falling back to in-memory order store:", dbErr.message);
      }
    }

    const memoryOrder = {
      _id: "ORD-" + Math.floor(100000 + Math.random() * 900000),
      customerName,
      phone,
      villageTown,
      districtState,
      pinCode,
      items,
      totalAmount,
      paymentMethod: paymentMethod || 'COD',
      orderStatus: 'Confirmed',
      notes,
      createdAt: new Date().toISOString()
    };

    memoryOrders.unshift(memoryOrder);
    return res.status(201).json({
      success: true,
      message: "Order placed successfully! We will contact you on WhatsApp/Phone shortly.",
      orderId: memoryOrder._id,
      order: memoryOrder
    });
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ error: "Failed to place order" });
  }
});

// GET all orders
router.get('/', async (req, res) => {
  try {
    if (isDbConnected()) {
      const orders = await Order.find().sort({ createdAt: -1 });
      if (orders && orders.length > 0) {
        return res.json(orders);
      }
    }
    res.json(memoryOrders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

module.exports = router;
