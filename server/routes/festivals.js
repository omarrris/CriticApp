const express = require('express');
const router = express.Router();
const { getAllFestivals, getFestivalById } = require('../controllers/festivalController');

// Get all festivals
router.get('/', getAllFestivals);

// Get a festival by ID
router.get('/:id', getFestivalById, (req, res) => {
    res.json(res.festival);
});

module.exports = router;
