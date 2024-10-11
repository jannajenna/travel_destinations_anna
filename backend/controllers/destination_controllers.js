//Importing modules
const Destination = require('../models/Destination.js')

//CRUD (create, read, update, delete) operations

//GET all destinations in the database
exports.getAllDestinations = async (req, res) => {
    try {
        const destination = await Destination.find(); //Get all destinations
        console.log(destination);
        res.status(201).json(destination);
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ error });
    };
};

//POST a new destination in the database
exports.newDestinations = async (req, res) => {
    try {
        // Extract the data from the request body
        const { title, city, country, dateFrom, dateTo, description } = req.body;

        const newDestination = new Destination({
            title,
            city,
            country,
            dateFrom,
            dateTo,
            description
            //Images
        });

        // Save the new destination to the database
        await newDestination.save();
        res.status(201).json(newDestination);

    } catch (error) {
        console.log("error", error);
        res.status(500).json({ error });
    };
};

//DELETE  a destination in the database
exports.deleteDestinations = async (req, res) => {
    try {
        await Destination.findByIdAndDelete(req.params.id);
        res.json({ message: 'Destination deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    };
};

//PATCH a destination in the database
exports.updateDestination = async (req, res) => {
    try {
        const updatedDestination = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });

        //{ new: true }: This option ensures that the updated document is returned after the update (otherwise, the old document is returned).

        res.json({ message: 'Destination modified', updatedDestination });
    } catch (err) {
        res.status(500).json({ message: err.message });
    };
};
