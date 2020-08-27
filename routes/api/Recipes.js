const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../../middleware/auth');

// Ingredients model
const Recipes = require('../../models/Recipes');

//@route GET api/ingredients
//@desc GET ALL Ingredients
//@access Public

router.get('/', (req, res) => {
  Recipes.find()
    .sort({ date: -1 })
    .then(ingredients => res.json(ingredients))
});

//@route POST api/ingredients
//@desc Create a Ingredient
//@access Private

router.post('/', auth, (req, res) => {
  const newRecipes = new Recipes({
    name: req.body.name
  });

  newRecipes.save().then(ingredients =>res.json(ingredients))
});

//@route DELETE api/ingredients/:id
//@desc Delete a Ingredient
//@access Private

router.delete('/:id', auth, (req, res) => {
  Recipes.findById(req.params.id)
    .then(ingredients => ingredients.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;