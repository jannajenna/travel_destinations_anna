// Import functions for fetching and adding destinations
import { getAllDestinations } from "./api.js";
import { addDestinationForm } from "./add_destination_form.js";
import { displayDestinations } from "./display_destinations.js";


//On load page - make sure the DOM is loaded before running any functions
window.addEventListener("load", async () => {
    // Fetch data
    const destinations = await getAllDestinations();

    if (destinations && destinations.length > 0) {
        // Call the function to display destinations
        displayDestinations(destinations);
    } else {
        console.log("No destinations data has been found");
    }

    // Submit new destination data
    const submitDestination = document.getElementById("destination_form");
    submitDestination.addEventListener("submit", async (e) => {
        e.preventDefault();

        //Add new destination
        const newDestination = await addDestinationForm();

        if (newDestination) {
            displayDestinations([newDestination])
            submitDestination.reset();
        };
    });
});

