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
    await Genre.deleteMany({});
    await Movie.deleteMany({});
    await Director.deleteMany({});
    await Festival.deleteMany({});
    await User.deleteMany({});

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
      ];

    const savedDirectors = await Director.insertMany(directors);

    const festivals = [
        name: "Cannes Film Festival",
        image: "URL_to_Cannes_image",
        history: "The Cannes Film Festival is an annual film festival held in Cannes, France. It previews new films of all genres, including documentaries, from all around the world.",
        movies: [
            {
                genre: "Drama",
                movie: "Blue Is the Warmest Color",
                year: 2013,
                director: "Abdellatif Kechiche",
                poster: "URL_to_Blue_Is_the_Warmest_Color_Poster",
                runtime: "179 min",
                rating: "NC-17",
                rottenTomatoesScore: 89,
                imdbRating: 7.7,
                synopsis: "Adèle's life is changed when she meets Emma, a young woman with blue hair, who allows her to discover desire and to assert herself as a woman and as an adult."
            },
            {
                genre: "Crime",
                movie: "Pulp Fiction",
                year: 1994,
                director: "Quentin Tarantino",
                poster: "URL_to_Pulp_Fiction_Poster",
                runtime: "154 min",
                rating: "R",
                rottenTomatoesScore: 92,
                imdbRating: 8.9,
                synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
            },
            {
                genre: "Animation",
                movie: "Persepolis",
                year: 2007,
                director: "Marjane Satrapi and Vincent Paronnaud",
                poster: "URL_to_Persepolis_Poster",
                runtime: "96 min",
                rating: "PG-13",
                rottenTomatoesScore: 96,
                imdbRating: 8.0,
                synopsis: "A precocious and outspoken Iranian girl grows up during the Islamic Revolution."
            },
            {
                genre: "Biography",
                movie: "Amour",
                year: 2012,
                director: "Michael Haneke",
                poster: "URL_to_Amour_Poster",
                runtime: "127 min",
                rating: "PG-13",
                rottenTomatoesScore: 93,
                imdbRating: 7.9,
                synopsis: "Georges and Anne are an octogenarian couple. They are cultivated, retired music teachers. One day, Anne has a stroke, and the couple's bond of love is severely tested."
            },
            {
                genre: "Comedy",
                movie: "The Artist",
                year: 2011,
                director: "Michel Hazanavicius",
                poster: "URL_to_The_Artist_Poster",
                runtime: "100 min",
                rating: "PG-13",
                rottenTomatoesScore: 95,
                imdbRating: 7.9,
                synopsis: "A silent movie star meets a young dancer, but the arrival of talking pictures sends their careers in opposite directions."
            },
            {
                genre: "Documentary",
                movie: "Fahrenheit 9/11",
                year: 2004,
                director: "Michael Moore",
                poster: "URL_to_Fahrenheit_9/11_Poster",
                runtime: "122 min",
                rating: "R",
                rottenTomatoesScore: 83,
                imdbRating: 7.5,
                synopsis: "Michael Moore's view on what happened to the United States after September 11, and how the Bush Administration allegedly used the tragic event to push forward its agenda for unjust wars in Afghanistan and Iraq."
            },
            {
                genre: "Fantasy",
                movie: "Pan's Labyrinth",
                year: 2006,
                director: "Guillermo del Toro",
                poster: "URL_to_Pans_Labyrinth_Poster",
                runtime: "118 min",
                rating: "R",
                rottenTomatoesScore: 95,
                imdbRating: 8.2,
                synopsis: "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world."
            },
            {
                genre: "Horror",
                movie: "The Wicker Man",
                year: 1973,
                director: "Robin Hardy",
                poster: "URL_to_The_Wicker_Man_Poster",
                runtime: "88 min",
                rating: "R",
                rottenTomatoesScore: 90,
                imdbRating: 7.5,
                synopsis: "A police sergeant is sent to a Scottish island village in search of a missing girl who the locals claim never existed. He meets strange and interesting people and slowly learns that the town is not as it seems."
            },
            {
                genre: "Musical",
                movie: "Dancer in the Dark",
                year: 2000,
                director: "Lars von Trier",
                poster: "URL_to_Dancer_in_the_Dark_Poster",
                runtime: "140 min",
                rating: "R",
                rottenTomatoesScore: 68,
                imdbRating: 8.0,
                synopsis: "An East European girl travels to the United States with her young son, expecting it to be like a Hollywood film."
            },
            {
                genre: "Mystery",
                movie: "The Third Man",
                year: 1949,
                director: "Carol Reed",
                poster: "URL_to_The_Third_Man_Poster",
                runtime: "93 min",
                rating: "Not Rated",
                rottenTomatoesScore: 99,
                imdbRating: 8.1,
                synopsis: "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime."
            },
            {
                genre: "Romance",
                movie: "Carol",
                year: 2015,
                director: "Todd Haynes",
                poster: "URL_to_Carol_Poster",
                runtime: "118 min",
                rating: "R",
                rottenTomatoesScore: 94,
                imdbRating: 7.2,
                synopsis: "An aspiring photographer develops an intimate relationship with an older woman in 1950s New York."
            },
            {
                genre: "Sci-Fi",
                movie: "Brazil",
                year: 1985,
                director: "Terry Gilliam",
                poster: "URL_to_Brazil_Poster",
                runtime: "132 min",
                rating: "R",
                rottenTomatoesScore: 98,
                imdbRating: 8.0,
                synopsis: "A bureaucrat in a dystopic society becomes an enemy of the state as he pursues the woman of his dreams."
            },
            {
                genre: "Thriller",
                movie: "Oldboy",
                year: 2003,
                director: "Park Chan-wook",
                poster: "URL_to_Oldboy_Poster",
                runtime: "120 min",
                rating: "R",
                rottenTomatoesScore: 82,
                imdbRating: 8.4,
                synopsis: "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days."
            },
            {
                genre: "War",
                movie: "The Pianist",
                year: 2002,
                director: "Roman Polanski",
                poster: "URL_to_The_Pianist_Poster",
                runtime: "150 min",
                rating: "R",
                rottenTomatoesScore: 95,
                imdbRating: 8.5,
                synopsis: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II."
            },
            {
                genre: "Western",
                movie: "The Proposition",
                year: 2005,
                director: "John Hillcoat",
                poster: "URL_to_The_Proposition_Poster",
                runtime: "104 min",
                rating: "R",
                rottenTomatoesScore: 85,
                imdbRating: 7.4,
                synopsis: "A lawman apprehends a notorious outlaw and gives him nine days to kill his older brother, or else they'll execute his younger brother."
            }
        ]


        { name: 'Sundance', logo: 'sundance.jpg', history: 'The Sundance Film Festival is an annual film festival organized by the Sundance Institute. It is the largest independent film festival in the United States, showcasing new work from American and international independent filmmakers.', movies: [savedMovies[2]._id, savedMovies[3]._id] },
        { name: 'Venice', logo: 'venice.jpg', history: 'The Venice Film Festival or Venice International Film Festival is the world\'s oldest film festival. Founded by Count Giuseppe Volpi in 1932, the festival is held annually in late August or early September on the island of the Lido in the Venice Lagoon.', movies: [savedMovies[0]._id] },
        { name: 'Toronto', logo: 'toronto.jpg', history: 'The Toronto International Film Festival (TIFF) is one of the largest publicly attended film festivals in the world, attracting over 480,000 people annually. TIFF starts the Thursday night after Labour Day (the first Monday in September in Canada) and lasts for eleven days.', movies: [savedMovies[1]._id] },
        { name: 'Berlin', logo: 'berlin.jpg', history: 'The Berlin International Film Festival, usually called the Berlinale, is a film festival held annually in Berlin, Germany. Founded in West Berlin in 1951, the festival has been held every February since 1978.', movies: [savedMovies[2]._id] },
        { name: 'SXSW', logo: 'sxsw.jpg', history: 'South by Southwest (SXSW) is an annual conglomeration of parallel film, interactive media, and music festivals and conferences that take place in mid-March in Austin, Texas, United States.', movies: [savedMovies[3]._id] },
        { name: 'NYFF', logo: 'nyff.jpg', history: 'The New York Film Festival (NYFF) is an annual film festival held every fall in New York City, presented by Film at Lincoln Center. It was founded in 1963 by Richard Roud and Amos Vogel with the support of Lincoln Center President William Schuman.', movies: [savedMovies[0]._id] },
        { name: 'Tribeca', logo: 'tribeca.jpg', history: 'The Tribeca Film Festival is a prominent festival that takes place in Tribeca, a neighborhood in Lower Manhattan, New York City. It was founded in 2002 by Jane Rosenthal and Robert De Niro in response to the September 11 attacks on the World Trade Center.', movies: [savedMovies[1]._id] },
        { name: 'Telluride', logo: 'telluride.jpg', history: 'The Telluride Film Festival is a film festival held annually over Labor Day weekend in Telluride, Colorado. The festival was started in 1974 by Bill and Stella Pence, Tom Luddy, and James Card, and is operated by the National Film Preserve.', movies: [savedMovies[2]._id] },
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
