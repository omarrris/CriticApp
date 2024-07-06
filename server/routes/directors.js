const express = require('express');
const router = express.Router();
const Director = require('../models/Director');

// Get all directors
router.get('/', async (req, res) => {
  try {
    const directors = await Director.find();
    res.json(directors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new director
router.post('/', async (req, res) => {
  const director = new Director(req.body);

  try {
    const newDirector = await director.save();
    res.status(201).json(newDirector);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
