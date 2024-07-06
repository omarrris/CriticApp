const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  genres: [String],
  list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
  ratedMovies: [{
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    rating: { type: Number, min: 0.5, max: 5.0 } // Ratings in increments of 0.5
  }]
});

module.exports = mongoose.model('User', UserSchema);
