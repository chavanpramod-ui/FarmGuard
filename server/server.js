require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const inquiryRoutes = require('./routes/inquiryRoutes');
const seedProducts = require('./data/seedProducts');
const Product = require('./models/Product');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/farm_guard';

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/inquiries', inquiryRoutes);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    appName: 'FarmGuard / KisanJhatka API',
    database: mongoose.connection.readyState === 1 ? 'Connected (MongoDB)' : 'Fallback (In-Memory Ready)',
    timestamp: new Date().toISOString()
  });
});

// Seed MongoDB database if connected and empty or outdated
const seedDatabaseIfEmpty = async () => {
  try {
    const checkNew = await Product.findOne({ _id: 'prod_jhatka_12kv_set' });
    const count = await Product.countDocuments();
    if (!checkNew || count !== seedProducts.length) {
      console.log("Updating/Seeding MongoDB with exact shop catalog and retail pricing...");
      await Product.deleteMany({});
      await Product.insertMany(seedProducts);
      console.log(`Successfully seeded ${seedProducts.length} shop products into MongoDB.`);
    } else {
      console.log(`MongoDB already contains updated shop catalog (${count} products).`);
    }
  } catch (err) {
    console.warn("Error checking/seeding DB:", err.message);
  }
};

// Attempt MongoDB Connection with 3 second timeout so app doesn't hang if Mongo not installed
mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 3000
}).then(() => {
  console.log("SUCCESS: Connected to MongoDB at", MONGODB_URI);
  seedDatabaseIfEmpty();
}).catch((err) => {
  console.log("NOTE: MongoDB local connection not available right now (" + err.message + ").");
  console.log("No worries! The API will automatically run using built-in high-performance In-Memory Fallback mode so all endpoints, catalog, and checkout work seamlessly without errors.");
});

app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 FarmGuard / KisanJhatka Backend Server Running!`);
  console.log(`API Base URL: http://localhost:${PORT}/api/products`);
  console.log(`Health Check: http://localhost:${PORT}/api/health`);
  console.log(`======================================================\n`);
});
