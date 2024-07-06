const mongoose = require('mongoose');

const FestivalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String },
  history: { type: String },
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});

module.exports = mongoose.model('Festival', FestivalSchema);
