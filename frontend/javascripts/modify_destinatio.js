import { modifyDestination } from "./api.js";
import { formatDate } from "./formate_date.js";

export function updateDestination(destination) {
    const form = document.getElementById('destination_form');

    // Fill the form with existing data
    form.querySelector('#title').value = destination.title;
    form.querySelector('#city').value = destination.city;
    form.querySelector('#country').value = destination.country;
    form.querySelector('#description').value = destination.description;

    //Formate the data
    form.querySelector('#date_from').value = formatDate(destination.dateFrom);
    form.querySelector('#date_to').value = formatDate(destination.dateTo);

    // Handle form submission for updating the destination
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Collect updated data from the form
        const updatedData = {
            title: form.querySelector('#title').value,
            city: form.querySelector('#city').value,
            country: form.querySelector('#country').value,
            dateFrom: form.querySelector('#date_from').value,
            dateTo: form.querySelector('#date_to').value,
            description: form.querySelector('#description').value,
        };

        // Call the API function
        const result = await modifyDestination(destination._id, updatedData);

        if (result) {
            console.log("Destination updated");
            // Reset form fields
            form.reset();
        } else {
            console.log("Failed to update the destination");
        }
    }, { once: true });  // Ensures the event listener is added only once
};
