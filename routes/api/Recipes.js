const express = require('express');
const router = express.Router();

// Recipes model
const Recipes = require('../../models/Recipes');
const { Recipe } = require('../../config/keys');

//@route GET api/recipes
//@desc GET ALL Recipes
//@access Public

router.get('/', (req, res) => {
  Recipe.find()
    .sort({ date: -1 })
    .then(recipe => res.json(recipe))


});

//@route POST api/recipes
//@desc Create a recipe
//@access Public

router.post('/', (req, res) => {
  const newRecipe = new Recipes({
    name: req.body.name
  });

  newRecipe.save().then(recipe =>res.json(recipe))
});




module.exports = router;