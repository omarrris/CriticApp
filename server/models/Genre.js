const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String, // URL of the genre image
    required: true,
  },
});

const Genre = mongoose.model('Genre', GenreSchema);

module.exports = Genre;
