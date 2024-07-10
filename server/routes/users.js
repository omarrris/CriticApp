const express = require('express');
const router = express.Router();
const { registerUser, loginUser, updateUserGenres, addUserMovie, rateMovie } = require('../controllers/userController');

// User registration
router.post('/register', registerUser);

// User login
router.post('/login', loginUser);

// Update user genres
router.put('/genres', updateUserGenres);

// Add movie to list
router.put('/movieList', addUserMovie);

// Rate movie
router.put('/rateMovie', rateMovie);

module.exports = router;
