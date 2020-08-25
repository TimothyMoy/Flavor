const express = require('express');
const mongoose = require('mongoose');

const recipes = require('./routes/api/Recipes');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI

//----------Middleware-----------

//BodyParser Middleware
app.use(express.json());


//Use Routes
app.use('/api/Recipes', recipes)
app.use('/api/Ingredients', require('./routes/api/Ingredients'));
app.use('/api/Users', require('./routes/api/Users'));


const PORT = process.env.PORT || 4000;

//--Server Listener--//
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));