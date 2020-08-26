const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User Schema

const UserSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  about:{
    type: String,
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);