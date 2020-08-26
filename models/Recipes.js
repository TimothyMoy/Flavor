const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Recipe Schema

const RecipeSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    require: true
  },
  picture: {
    type: String,
  },
  instructions: {
    type: String,
  },
  ingredients: {
    type: [String],
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Recipes = mongoose.model('Recipe', RecipeSchema);