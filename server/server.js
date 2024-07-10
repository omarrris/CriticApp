const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Define routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/genres', require('./routes/genre'));
app.use('/api/directors', require('./routes/director'));
app.use('/api/festivals', require('./routes/festival'));
app.use('/api/users', require('./routes/user'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
