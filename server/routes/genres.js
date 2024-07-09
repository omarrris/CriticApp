const express = require('express');
const router = express.Router();
const Genre = require('../models/Genre');

// Get all genres
router.get('/', async (req, res) => {
  try {
    const genres = await Genre.find();
    res.json(genres);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
