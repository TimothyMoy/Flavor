const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Ingredients Schema

const IngredientsSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Recipe = mongoose.model('Ingredient', IngredientsSchema);