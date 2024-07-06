const express = require('express');
const router = express.Router();
const Festival = require('../models/Festival');

// Get all festivals
router.get('/', async (req, res) => {
  try {
    const festivals = await Festival.find();
    res.json(festivals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new festival
router.post('/', async (req, res) => {
  const festival = new Festival(req.body);

  try {
    const newFestival = await festival.save();
    res.status(201).json(newFestival);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
