const express = require('express');
const router = express.Router();
const Director = require('../models/Director');

router.get('/', async (req, res) => {
    try {
        const directors = await Director.find();
        res.json(directors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
