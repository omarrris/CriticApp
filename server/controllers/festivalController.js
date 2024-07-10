const Festival = require('../models/Festival');

const getAllFestivals = async (req, res) => {
    try {
        const festivals = await Festival.find();
        res.json(festivals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getFestivalById = async (req, res, next) => {
    let festival;
    try {
        festival = await Festival.findById(req.params.id);
        if (festival == null) {
            return res.status(404).json({ message: 'Cannot find festival' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.festival = festival;
    next();
};

// Export the functions to be used in the routes
module.exports = { getAllFestivals, getFestivalById };
