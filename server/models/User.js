const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    genres: [{ type: String }],
    movieList: [{ 
        movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }, 
        addedAt: { type: Date, default: Date.now }
    }],
    ratedMovies: [{
        movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
        rating: { type: Number },
        ratedAt: { type: Date, default: Date.now }
    }]
});

module.exports = mongoose.model('User', userSchema);
