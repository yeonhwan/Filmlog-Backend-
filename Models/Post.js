const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  username : String,
  userId : String,
  pictureDisplayUrl : String,
  pictureRawUrl : String,
  postDate : Date,
  upVotes : Number,
  downVotes : Number,
  body: {
    postTitle : String,
    postingText : String,
    filmCartridge : String,
    shotLocation : String,
    camera : String
  },
  comments : [{commentId: String, commentBody: String}]
})


module.exports.Post = new mongoose.model('Post', postSchema);
