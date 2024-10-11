const express = require('express');
const destinationController = require('../controllers/destination_controllers');
const router = express.Router();

//Routes map HTTP requests to corresponding controller actions.


// Route to get all destinations
router.get('/destinations', destinationController.getAllDestinations);

// Route to create a new destination
router.post('/destinations', destinationController.newDestinations);

//Route - delete a destination
router.delete('/destinations/:id', destinationController.deleteDestinations);

//Route - modify a destination;
router.patch('/destinations/:id', destinationController.updateDestination);


module.exports = router;