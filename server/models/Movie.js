const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: String,
  poster: String,
  director: String,
  year: Number,
  runtime: Number,
  rating: String,
  genre: [String],
  rottenTomatoesScore: Number,
  imdbRating: Number,
  synopsis: String,
});

module.exports  = mongoose.model('Movie', MovieSchema);
