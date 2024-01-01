const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  profileImageUrl: String,
});

const Avatar = mongoose.model('Avatar', userSchema);

module.exports = Avatar;
