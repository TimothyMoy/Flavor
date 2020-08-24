const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const recipes = require('./routes/api/Recipes');
const app = express();

// DB Config
const db = require('./config/keys').mongoURI

//----------Middleware-----------

//BodyParser Middleware
app.use(bodyParser.json());


//Use Routes
app.use('/api/Recipes', recipes)


const PORT = process.env.PORT || 4000;

//--Server Listener--//
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));