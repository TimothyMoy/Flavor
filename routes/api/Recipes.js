const express = require('express');
const router = express.Router();

// Recipes model
const Recipes = require('../../models/Recipes');


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

//@route DELETE api/recipes/:id
//@desc Delete a recipe
//@access Public

router.delete('/:id', (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => recipe.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;