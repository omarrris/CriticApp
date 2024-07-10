const express = require('express');
const router = express.Router();
const { getAllDirectors, getDirectorById } = require('../controllers/directorController');

// Get all directors
router.get('/', getAllDirectors);

// Get a director by ID
router.get('/:id', getDirectorById, (req, res) => {
    res.json(res.director);
});

module.exports = router;
