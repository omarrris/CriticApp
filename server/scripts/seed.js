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
        { name: 'Adult', image: 'adult.jpg' },
        { name: 'Adventure', image: 'adventure.jpg' },
        { name: 'Animation', image: 'animation.jpg' },
        { name: 'Biography', image: 'biography.jpg' },
        { name: 'Comedy', image: 'comedy.jpg' },
        { name: 'Crime', image: 'crime.jpg' },
        { name: 'Documentary', image: 'documentary.jpg' },
        { name: 'Drama', image: 'drama.jpg' },
        { name: 'Family', image: 'family.jpg' },
        { name: 'Fantasy', image: 'fantasy.jpg' },
        { name: 'Film Noir', image: 'film_noir.jpg' },
        { name: 'Game Show', image: 'game_show.jpg' },
        { name: 'History', image: 'history.jpg' },
        { name: 'Horror', image: 'horror.jpg' },
        { name: 'Musical', image: 'musical.jpg' },
        { name: 'Music', image: 'music.jpg' },
        { name: 'Mystery', image: 'mystery.jpg' },
        { name: 'News', image: 'news.jpg' },
        { name: 'Reality-TV', image: 'reality_tv.jpg' },
        { name: 'Romance', image: 'romance.jpg' },
        { name: 'Sci-Fi', image: 'sci_fi.jpg' },
        { name: 'Short', image: 'short.jpg' },
        { name: 'Sport', image: 'sport.jpg' },
        { name: 'Talk-Show', image: 'talk_show.jpg' },
        { name: 'Thriller', image: 'thriller.jpg' },
        { name: 'War', image: 'war.jpg' },
        { name: 'Western', image: 'western.jpg' }
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
        { name: 'Christopher Nolan', image: 'nolan.jpg', biography: 'British-American film director, producer, and screenwriter. His films are known for their complex storytelling, often incorporating non-linear narratives and philosophical themes. Some of his notable works include Inception, The Dark Knight Trilogy, and Interstellar.', recommendations: [savedMovies[0]._id, savedMovies[1]._id] },
        { name: 'Quentin Tarantino', image: 'tarantino.jpg', biography: 'American film director, screenwriter, producer, and actor. Known for his eclectic and genre-blending films, he has been a prominent figure in contemporary cinema since the early 1990s. His famous works include Pulp Fiction, Kill Bill, and Once Upon a Time in Hollywood.', recommendations: [savedMovies[2]._id] },
        { name: 'Wes Anderson', image: 'anderson.jpg', biography: 'American filmmaker known for his distinctive visual and narrative style. His films often feature symmetrical compositions, eccentric characters, and a whimsical tone. Notable films include The Grand Budapest Hotel, Moonrise Kingdom, and The Royal Tenenbaums.' },
        { name: 'Sofia Coppola', image: 'coppola.jpg', biography: 'American filmmaker and actress. She is known for her unique cinematic voice, often focusing on themes of isolation, fame, and femininity. Her notable films include Lost in Translation, The Virgin Suicides, and Marie Antoinette.' },
        { name: 'Francis Ford Coppola', image: 'francis_coppola.jpg', biography: 'American film director, producer, and screenwriter. He is widely considered one of the greatest filmmakers of all time, known for directing the epic Godfather trilogy and Apocalypse Now.' },
        { name: 'Steven Spielberg', image: 'spielberg.jpg', biography: 'American filmmaker, considered one of the founding pioneers of the New Hollywood era. He is one of the most popular directors and producers in film history, with notable works including Jaws, E.T. the Extra-Terrestrial, and Jurassic Park.' },
        { name: 'Alfonso Cuarón', image: 'cuaron.jpg', biography: 'Mexican film director, screenwriter, producer, and editor. He is known for his diverse filmography, which includes A Little Princess, Harry Potter and the Prisoner of Azkaban, Children of Men, Gravity, and Roma.' },
        { name: 'Paul Thomas Anderson', image: 'pta.jpg', biography: 'American filmmaker known for his work in the 1990s and 2000s. He is known for his distinctive directing style and complex characters. His notable films include Boogie Nights, Magnolia, and There Will Be Blood.' },
        { name: 'Spike Lee', image: 'lee.jpg', biography: 'American film director, producer, screenwriter, actor, and professor. His production company, 40 Acres and a Mule Filmworks, has produced over 35 films since 1983. His notable works include Do the Right Thing, Malcolm X, and BlacKkKlansman.' },
        { name: 'Alejandro González Iñárritu', image: 'inarritu.jpg', biography: 'Mexican film director, producer, and screenwriter. He is known for his films Babel, Birdman, and The Revenant, which have garnered numerous awards and critical acclaim.' },
        { name: 'Bong Joon-ho', image: 'bong.jpg', biography: 'South Korean film director, producer, and screenwriter. His films feature a mix of social themes, genre elements, and dark humor. Notable works include Memories of Murder, The Host, Snowpiercer, and Parasite.' },
        { name: 'Martin Scorsese', image: 'scorsese.jpg', biography: 'American film director, producer, screenwriter, and actor. He is widely regarded as one of the most significant and influential filmmakers in cinema history, known for films such as Taxi Driver, Raging Bull, Goodfellas, and The Irishman.' },
        { name: 'Richard Linklater', image: 'linklater.jpg', biography: 'American filmmaker known for his naturalistic films with real-time narratives. He has directed films such as Dazed and Confused, the Before trilogy, and Boyhood.' },
        { name: 'Hayao Miyazaki', image: 'miyazaki.jpg', biography: 'Japanese film director, producer, screenwriter, animator, author, and manga artist. A co-founder of Studio Ghibli, he has gained international acclaim for his richly animated films, including My Neighbor Totoro, Spirited Away, and Princess Mononoke.' },
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
