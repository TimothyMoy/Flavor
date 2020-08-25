const mongoose = require('mongoose');

const MOGODB_URI = 'mongodb+srv://moytimothy:pockys55@cluster0.qqj9k.mongodb.net/flavor?retryWrites=true&w=majority';

mongoose.connect(MOGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then (() => console.log('MongoDB conneced successfully')) //Success Handler
  .catch((err) => console.log(`MongoDB connection error: ${err}`));


module.exports = {
  Recipe: require('../models/Recipes',),
  Ingredient: require('../models/Ingredients')
};
