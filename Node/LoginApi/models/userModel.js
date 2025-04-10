const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/  // basic email validation
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Users', userSchema);
