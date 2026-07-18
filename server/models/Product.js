const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: { type: String },
  name: {
    type: String,
    required: true,
    trim: true
  },
  nameHindi: {
    type: String,
    trim: true
  },
  nameMarathi: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['jhatka_machine', 'solar_accessories', 'insulators_wires', 'agri_machinery']
  },
  tagline: {
    type: String
  },
  taglineHindi: {
    type: String
  },
  taglineMarathi: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  originalPrice: {
    type: Number
  },
  specifications: {
    voltageOutput: { type: String, default: "10,000V - 12,000V Pulsed" },
    coverageArea: { type: String, default: "Up to 30 Acres (5 - 8 km fence line)" },
    batteryBackup: { type: String, default: "12V / 14Ah - Up to 48 Hours Backup" },
    warranty: { type: String, default: "1 Year Replacement Warranty + 2 Years Service" },
    pulseInterval: { type: String, default: "1.2 seconds (ISI Standard Non-Lethal)" },
    solarPanelSize: { type: String, default: "20W - 40W Solar Panel Compatible" }
  },
  image: {
    type: String,
    required: true
  },
  inStock: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 4.8
  },
  reviewsCount: {
    type: Number,
    default: 24
  },
  features: [{
    type: String
  }],
  featuresHindi: [{
    type: String
  }],
  featuresMarathi: [{
    type: String
  }],
  packageContents: [{
    type: String
  }],
  recommendedFor: [{
    type: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
