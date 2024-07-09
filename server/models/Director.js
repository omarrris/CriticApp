const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
  genre: { type: String, required: true },
  movie: { type: String, required: true },
  year: { type: Number, required: true },
  director: { type: String, required: true },
  poster: { type: String, required: true },
  runtime: { type: String, required: true },
  rating: { type: String, required: true },
  rottenTomatoesScore: { type: Number, required: true },
  imdbRating: { type: Number, required: true },
  synopsis: { type: String, required: true },
});

const directorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  biography: { type: String, required: true },
  recommendations: [recommendationSchema], 
});

module.exports = mongoose.model('Director', directorSchema);
