const express = require('express');
const router = express.Router();
const { getAllGenres } = require('../controllers/genreController');

// Get all genres
router.get('/', getAllGenres);

module.exports = router;
