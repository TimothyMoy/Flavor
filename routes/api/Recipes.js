const express = require('express');
const router = express.Router();

// Recipes model
const Recipes = require('../../models/Recipes');

//@route GET api/recipes
//@desc Get ALL Recipes
//@access Public

router.get('/', (req, res) => {
  const newRecipe = new Recipes({
    name: req.body.name
  });

  newRecipe.save().then(recipe =>res.json(recipe))
});

module.exports = router;