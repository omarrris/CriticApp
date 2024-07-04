const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/sample', require('./routes/sampleRoute'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
