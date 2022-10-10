const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  WrittenByUsername : String,
  userid : String,
  body: String,
  postDate : Date,
  upVotes : Number,
  downVotes : Number
})

module.exports.Comment = new mongoose.model('Comment', commentSchema);
