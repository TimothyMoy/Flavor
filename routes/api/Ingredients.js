const express = require('express');
const router = express.Router();

// Ingredients model
const Ingredients = require('../../models/Ingredients');
const { Ingredient } = require('../../config/keys');

//@route GET api/ingredients
//@desc GET ALL Ingredients
//@access Public

router.get('/', (req, res) => {
  Ingredient.find()
    .sort({ date: -1 })
    .then(ingredients => res.json(ingredients))
});

//@route POST api/ingredients
//@desc Create a Ingredient
//@access Public

router.post('/', (req, res) => {
  const newIngredient = new Ingredients({
    name: req.body.name
  });

  newIngredient.save().then(ingredient =>res.json(ingredient))
});

//@route DELETE api/ingredients/:id
//@desc Delete a Ingredient
//@access Public

router.delete('/:id', (req, res) => {
  Ingredient.findById(req.params.id)
    .then(ingredient => ingredient.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;