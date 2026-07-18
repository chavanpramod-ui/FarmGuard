const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const seedProducts = require('../data/seedProducts');

// Helper to check if Mongoose is connected
const isDbConnected = () => {
  return require('mongoose').connection.readyState === 1;
};

// GET all products (with optional search, category, and sorting filters)
router.get('/', async (req, res) => {
  try {
    const { category, search, minPrice, maxPrice, featured } = req.query;

    if (isDbConnected()) {
      let query = {};
      if (category && category !== 'all') query.category = category;
      if (featured === 'true') query.isFeatured = true;
        query.$or = [
          { name: { $regex: search, $options: 'i' } },
          { nameHindi: { $regex: search, $options: 'i' } },
          { nameMarathi: { $regex: search, $options: 'i' } },
          { tagline: { $regex: search, $options: 'i' } },
          { taglineMarathi: { $regex: search, $options: 'i' } }
        ];
      if (minPrice || maxPrice) {
        query.price = {};
        if (minPrice) query.price.$gte = Number(minPrice);
        if (maxPrice) query.price.$lte = Number(maxPrice);
      }

      const products = await Product.find(query);
      if (products && products.length > 0) {
        return res.json(products);
      }
    }

    // In-memory fallback if DB not connected or empty
    let filtered = [...seedProducts];
    if (category && category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }
    if (featured === 'true') {
      filtered = filtered.filter(p => p.isFeatured);
    }
    if (search) {
      const s = search.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(s) || 
        (p.nameHindi && p.nameHindi.toLowerCase().includes(s)) ||
        (p.nameMarathi && p.nameMarathi.toLowerCase().includes(s)) ||
        p.tagline.toLowerCase().includes(s) ||
        (p.taglineMarathi && p.taglineMarathi.toLowerCase().includes(s))
      );
    }
    if (minPrice) {
      filtered = filtered.filter(p => p.price >= Number(minPrice));
    }
    if (maxPrice) {
      filtered = filtered.filter(p => p.price <= Number(maxPrice));
    }

    res.json(filtered);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// GET categories summary
router.get('/categories/summary', async (req, res) => {
  try {
    const summary = [
      { id: 'all', name: 'All Machines & Kits', nameHindi: 'सभी मशीनें और किट', nameMarathi: 'सर्व मशीन्स आणि किट', count: seedProducts.length },
      { id: 'jhatka_machine', name: 'Solar Jhatka Machines', nameHindi: 'सोलर झटका मशीन', nameMarathi: 'सोलर झटका मशीन', count: seedProducts.filter(p => p.category === 'jhatka_machine').length },
      { id: 'agri_machinery', name: 'Other Farm Machines', nameHindi: 'अन्य कृषि यंत्र (ब्रश कटर/पंप)', nameMarathi: 'इतर कृषी यंत्रे (ब्रश कटर/पंप)', count: seedProducts.filter(p => p.category === 'agri_machinery').length },
      { id: 'solar_accessories', name: 'Solar Panels & Batteries', nameHindi: 'सोलर पैनल और बैटरी', nameMarathi: 'सोलर पॅनेल व बॅटरी', count: seedProducts.filter(p => p.category === 'solar_accessories').length },
      { id: 'insulators_wires', name: 'Insulators & Wires', nameHindi: 'इंसुलेटर और तार', nameMarathi: 'इन्सुलेटर व वायर', count: seedProducts.filter(p => p.category === 'insulators_wires').length }
    ];
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch category summary" });
  }
});

// GET single product by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (isDbConnected()) {
      try {
        const product = await Product.findById(id);
        if (product) return res.json(product);
      } catch (e) {
        // ID might be string like prod_jhatka_01
        const productByString = await Product.findOne({ _id: id });
        if (productByString) return res.json(productByString);
      }
    }

    const memoryProduct = seedProducts.find(p => p._id === id);
    if (memoryProduct) {
      return res.json(memoryProduct);
    }

    res.status(404).json({ error: "Product not found" });
  } catch (err) {
    res.status(500).json({ error: "Error fetching single product" });
  }
});

module.exports = router;
