const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Genre = require('../models/Genre');
const Movie = require('../models/Movie');
const Director = require('../models/Director');
const Festival = require('../models/Festival');
const User = require('../models/User');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const seedDatabase = async () => {
  try {
    // Clear existing data
    await Genre.deleteMany({});
    await Movie.deleteMany({});
    await Director.deleteMany({});
    await Festival.deleteMany({});
    await User.deleteMany({});

    // Add genres
    const genres = [
      { name: 'Action', image: 'action.jpg' },
      { name: 'Adventure', image: 'adventure.jpg' },
      { name: 'Comedy', image: 'comedy.jpg' },
      { name: 'Drama', image: 'drama.jpg' },
      // Add more genres as needed
    ];

    const savedGenres = await Genre.insertMany(genres);

    // Add movies
    const movies = [
      { title: 'Inception', poster: 'inception.jpg', director: 'Christopher Nolan', year: 2010, runtime: 148, rating: 'PG-13', genre: 'Action', rottenTomatoesScore: 87, imdbRating: 8.8, synopsis: 'A thief who steals corporate secrets through the use of dream-sharing technology...' },
      { title: 'The Dark Knight', poster: 'dark_knight.jpg', director: 'Christopher Nolan', year: 2008, runtime: 152, rating: 'PG-13', genre: 'Action', rottenTomatoesScore: 94, imdbRating: 9.0, synopsis: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham...' },
      // Add more movies as needed
    ];

    const savedMovies = await Movie.insertMany(movies);

    // Add directors
    const directors = [
      { name: 'Christopher Nolan', image: 'nolan.jpg', biography: 'British-American film director, producer, and screenwriter...', recommendations: [savedMovies[0]._id, savedMovies[1]._id] },
      // Add more directors as needed
    ];

    const savedDirectors = await Director.insertMany(directors);

    // Add festivals
    const festivals = [
      { name: 'Cannes', logo: 'cannes.jpg', history: 'The Cannes Festival...', movies: [savedMovies[0]._id, savedMovies[1]._id] },
      // Add more festivals as needed
    ];

    await Festival.insertMany(festivals);

    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
    mongoose.connection.close();
  }
};

seedDatabase();
