const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use(cors());
app.use(express.json());

// Import routes
const genreRoutes = require('./routes/genres');
const movieRoutes = require('./routes/movies');
const directorRoutes = require('./routes/directors');
const festivalRoutes = require('./routes/festivals');
const userRoutes = require('./routes/users');

// Define routes
app.use('/api/genres', genreRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/directors', directorRoutes);
app.use('/api/festivals', festivalRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
