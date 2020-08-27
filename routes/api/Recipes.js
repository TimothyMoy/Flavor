const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../../middleware/auth');

// Ingredients model
const Recipes = require('../../models/Recipes');

//@route GET api/recipes
//@desc GET ALL recipes
//@access Public

router.get('/', (req, res) => {
  Recipes.find()
    .sort({ date: -1 })
    .then(recipes => res.json(recipes))
});

//@route GET api/recipes
//@desc GET a recipes
//@access Public

router.get('/:id', (req, res) => {
  Recipes.findById(req.params.id)
    .populate({ path: 'recipes' })
    .then(recipes => res.json(recipes))
});


//@route POST api/recipes
//@desc Create a recipes
//@access Private

router.post('/', auth, (req, res) => {
  const newRecipes = new Recipes({
    name: req.body.name,
    subtitle: req.body.subtitle,
    picture: req.body.picture
  });

  newRecipes.save().then(recipes =>res.json(recipes))
});

//@route DELETE api/recipes/:id
//@desc Delete a recipes
//@access Private

router.delete('/:id', auth, (req, res) => {
  Recipes.findById(req.params.id)
    .then(recipes => recipes.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;