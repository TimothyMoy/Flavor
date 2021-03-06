const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const path = require('path');
const app = express();
require('dotenv').config();

// DB Config
const db = config.get("mongoURI");


//----------Middleware-----------

//BodyParser Middleware
app.use(express.json());

// Connect to Mongo
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then (() => console.log('MongoDB conneced successfully')) //Success Handler
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

//Use Routes
app.use('/api/Recipes',require('./routes/api/Recipes'));
app.use('/api/Users', require('./routes/api/Users'));
app.use('/api/auth', require('./routes/api/auth'));


const PORT = process.env.PORT || 4000;

//--Server Listener--//
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));