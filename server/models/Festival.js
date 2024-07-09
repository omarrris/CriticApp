const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    genre: String,
    movie: String,
    year: Number,
    director: String,
    poster: String,
    runtime: String,
    rating: String,
    rottenTomatoesScore: Number,
    imdbRating: Number,
    synopsis: String,
});

const festivalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    history: {
        type: String,
        required: true,
    },
    movies: [movieSchema],
});

module.exports = mongoose.model('Festival', festivalSchema);
