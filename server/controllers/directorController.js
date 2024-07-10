const Director = require('../models/Director');

const getAllDirectors = async (req, res) => {
    try {
        const directors = await Director.find();
        res.json(directors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getDirectorById = async (req, res, next) => {
    let director;
    try {
        director = await Director.findById(req.params.id);
        if (director == null) {
            return res.status(404).json({ message: 'Cannot find director' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.director = director;
    next();
};

// Export the functions to be used in the routes
module.exports = { getAllDirectors, getDirectorById };
