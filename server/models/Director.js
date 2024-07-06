const mongoose = require('mongoose');

const DirectorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  biography: { type: String },
  recommendations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});

module.exports = mongoose.model('Director', DirectorSchema);
