const mongoose = require('mongoose');
const { Schema } = mongoose;

const ratedMovieSchema = new mongoose.Schema({
    movieId: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
    },
    rating: Number,
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    genres: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Genre',
        },
    ],
    ratedMovies: [ratedMovieSchema],
    list: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Movie',
        },
    ],
});

module.exports = mongoose.model('User', userSchema);
