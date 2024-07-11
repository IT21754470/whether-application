// src/models/user.model.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  weatherData: {
    type: Object, // Ensure this is Object and not String
    required: true,
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
