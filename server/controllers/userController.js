const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
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
};

const updateUserGenres = async (req, res) => {
    try {
        const { userId, genres } = req.body;
        const user = await User.findByIdAndUpdate(userId, { genres }, { new: true });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addUserMovie = async (req, res) => {
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
};

const rateMovie = async (req, res) => {
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
};

// Export the functions to be used in the routes
module.exports = { registerUser, loginUser, updateUserGenres, addUserMovie, rateMovie };
