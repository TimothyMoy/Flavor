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
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
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

//@route POST api/recipes/:id
//@desc Update a recipes
//@access Private

router.post('/:id', auth, (req, res) => {
  Recipes.findById(req.params.id)
    .then(recipes => {
      recipes.name = req.body.name;
      recipes.subtitle = req.body.subtitle;
      recipes.picture = req.body.recipes;

      recipes.save()
        .then(() => res.json('Recipes update!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
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