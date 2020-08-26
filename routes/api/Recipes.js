const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../../middleware/auth');

// Recipes model
const Recipes = require('../../models/Recipes');


//@route GET api/recipes
//@desc GET ALL Recipes
//@access Public

router.get('/', (req, res) => {
  Recipes.find()
    .sort({ date: -1 })
    .then(recipes => res.json(recipes))


});

//@route POST api/recipes
//@desc Create a recipe
//@access Public

router.post('/', auth, (req, res) => {
  const newRecipe = new Recipes({
    name: req.body.name
  });

  newRecipe.save().then(recipe =>res.json(recipe))
});

//@route DELETE api/recipes/:id
//@desc Delete a recipe
//@access Public

router.delete('/:id', auth, (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => recipe.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;