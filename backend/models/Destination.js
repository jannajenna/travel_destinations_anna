//Destiantin schema
const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    anonymous_id: {
        type: String,
        required: false
    },
    //Location is referenced data
    //location_id: {
    //  type: mongoose.Schema.Types.ObjectId,
    //ref: 'Location',
    //required: "Location is required"
    //},
    title: {
        type: String,
        required: "Title required"
    },
    city: {
        type: String,
        required: "City is required"
    },
    country: {
        type: String,
        required: "Country is required"
    },
    dateFrom: {
        type: Date,
        required: "Date from required"
    },
    dateTo: {
        type: Date,
        required: "Date to required"
    },
    description: {
        type: String,
        required: "Description required"
    },
    //Images
});

const Destination = mongoose.model('Destination', destinationSchema);

//Export module
module.exports = Destination;
