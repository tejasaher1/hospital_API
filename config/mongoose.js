const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/hospitalAPI');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', () => {
  console.log('Connected to MongoDB database');
});