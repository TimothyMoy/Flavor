const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Recipe Schema

const RecipeSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);