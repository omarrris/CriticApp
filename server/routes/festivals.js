const express = require('express');
const router = express.Router();
const Festival = require('../models/Festival');

router.get('/', async (req, res) => {
    try {
        const festivals = await Festival.find();
        res.json(festivals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
