const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

const isDbConnected = () => {
  return require('mongoose').connection.readyState === 1;
};

let memoryInquiries = [];

router.post('/', async (req, res) => {
  try {
    const { farmerName, phone, villageDistrict, farmAcres, animalThreats, powerSource, message } = req.body;

    if (!farmerName || !phone) {
      return res.status(400).json({ error: "Farmer Name and Phone Number are required" });
    }

    if (isDbConnected()) {
      try {
        const newInq = new Inquiry({
          farmerName,
          phone,
          villageDistrict,
          farmAcres,
          animalThreats,
          powerSource,
          message
        });
        const saved = await newInq.save();
        return res.status(201).json({
          success: true,
          message: "Consultation request received! Our agricultural expert will call you back within 2 hours.",
          inquiryId: saved._id
        });
      } catch (dbErr) {
        console.warn("Inquiry DB save failed, falling back to memory:", dbErr.message);
      }
    }

    const memoryInq = {
      _id: "INQ-" + Math.floor(10000 + Math.random() * 90000),
      farmerName,
      phone,
      villageDistrict,
      farmAcres,
      animalThreats,
      powerSource,
      message,
      status: 'New',
      createdAt: new Date().toISOString()
    };

    memoryInquiries.unshift(memoryInq);
    return res.status(201).json({
      success: true,
      message: "Consultation request received! Our agricultural expert will call you back within 2 hours.",
      inquiryId: memoryInq._id
    });
  } catch (err) {
    console.error("Error creating inquiry:", err);
    res.status(500).json({ error: "Failed to submit consultation request" });
  }
});

router.get('/', async (req, res) => {
  try {
    if (isDbConnected()) {
      const list = await Inquiry.find().sort({ createdAt: -1 });
      if (list && list.length > 0) return res.json(list);
    }
    res.json(memoryInquiries);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch inquiries" });
  }
});

module.exports = router;
