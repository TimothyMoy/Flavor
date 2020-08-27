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

router.post('/', (req, res) => {
  const newRecipe = new Recipes({
    title: req.body.title,
    body: req.body.body,
    picture: req.body.picture,
    instructions: req.body.instructions,
    ingredients: req.body.ingredients,
  });

  newRecipe.save().then(recipes =>res.json(recipes))
});

//@route DELETE api/recipes/:id
//@desc Delete a recipe
//@access Public

router.delete('/:id',(req, res) => {
  Recipes.findById(req.params.id)
    .then(recipes => recipes.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;