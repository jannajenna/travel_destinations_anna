const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// express
const app = express();
const port = 3003
//const PORT = process.env.PORT || 5000;

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Mongoose connect to database
//mongoose.connect('mongodb://localhost:27017/travel_destinations_anna');

mongoose.connect('mongodb://localhost:27017/travel_destinations_anna')
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.log('MongoDB connection error: ', err));

//CRUD operations 
app.use('/', require('./routes/destination_routes'));

//Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})