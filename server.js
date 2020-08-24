const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

const db = require('./models/keys').mongoURI

//----------Middleware-----------

//BodyParser Middleware
app.use(bodyParser.json());



//--Server Listener--//
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));