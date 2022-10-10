const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  userLogInId : String,
  userIcon : String,
  password: String,
  email : String,
  userPageInfo : String
})

module.exports.User = new mongoose.model('User', userSchema);
