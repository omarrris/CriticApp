const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User registration
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// User login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, userId: user._id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update user genres
router.put('/genres', async (req, res) => {
    try {
        const { userId, genres } = req.body;
        const user = await User.findByIdAndUpdate(userId, { genres }, { new: true });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add movie to list
router.put('/movieList', async (req, res) => {
    try {
        const { userId, movieId } = req.body;
        const user = await User.findByIdAndUpdate(
            userId, 
            { $push: { movieList: { movieId } } },
            { new: true }
        );
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rate movie
router.put('/rateMovie', async (req, res) => {
    try {
        const { userId, movieId, rating } = req.body;
        const user = await User.findByIdAndUpdate(
            userId,
            { $push: { ratedMovies: { movieId, rating } } },
            { new: true }
        );
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
