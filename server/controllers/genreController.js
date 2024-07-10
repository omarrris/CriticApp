const Genre = require('../models/Genre');

const getAllGenres = async (req, res) => {
    try {
        const genres = await Genre.find();
        res.json(genres);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Export the functions to be used in the routes
module.exports = { getAllGenres };
