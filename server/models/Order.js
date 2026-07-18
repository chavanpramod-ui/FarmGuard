const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  productId: { type: String }, // fallback string id for in-memory seed models
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
  image: { type: String }
});

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  villageTown: {
    type: String,
    required: true
  },
  districtState: {
    type: String,
    required: true
  },
  pinCode: {
    type: String
  },
  items: [orderItemSchema],
  totalAmount: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: String,
    enum: ['COD', 'UPI_ONLINE', 'WHATSAPP_DIRECT'],
    default: 'COD'
  },
  orderStatus: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Dispatched', 'Delivered', 'Cancelled'],
    default: 'Pending'
  },
  notes: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
