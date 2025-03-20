const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
console.log('MongoDB URI:', process.env.MONGODB_URI);
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Portfolio';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Failed:', err));

const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contacts', contactRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
