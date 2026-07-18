const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  farmerName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  villageDistrict: {
    type: String
  },
  farmAcres: {
    type: Number
  },
  animalThreats: [{
    type: String
  }],
  powerSource: {
    type: String
  },
  message: {
    type: String
  },
  status: {
    type: String,
    enum: ['New', 'Contacted', 'Quote Sent', 'Closed'],
    default: 'New'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Inquiry', inquirySchema);
