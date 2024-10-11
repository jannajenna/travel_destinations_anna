import { deleteDestination } from "./api.js";
import { updateDestination } from "./modify_destinatio.js";
import { formatDate } from "./formate_date.js";

// Function to display destinations using a template
export function displayDestinations(destinations) {
    const cardContainer = document.querySelector('.card_container');
    const template = document.getElementById('card_template');

    // Check if template exists
    if (!template) {
        console.error('Template not found!');
        return;
    };

    // Clear any existing content - commented ut so the list of cards updates 
    //cardContainer.innerHTML = '';

    // Loop through each destination and create a card using the template
    destinations.forEach(destination => {
        //Clone template
        const clone = template.content.cloneNode(true);

        // Populate the cloned template with data
        clone.querySelector('.card_title').textContent = destination.title;
        clone.querySelector('.card_city').textContent = destination.city;
        clone.querySelector('.card_country').textContent = destination.country;
        clone.querySelector('.card_description').textContent = destination.description;

        //Formate the data
        clone.querySelector('.card_date_from').textContent = formatDate(destination.dateFrom);
        clone.querySelector('.card_date_to').textContent = formatDate(destination.dateTo);


        //Deletion of destination
        const deleteButton = clone.querySelector('.delete_button');
        deleteButton.addEventListener('click', async () => {
            const deleted = await deleteDestination(destination._id);
            if (deleted) {
                deleteButton.closest('.card').remove();
            } else {
                console.log("Error deldeting the card");
            }
        });

        //Modify destination
        const modifyButton = clone.querySelector('.edit_button');
        modifyButton.addEventListener('click', () => {
            updateDestination(destination);
        });

        // Append the cloned card to the container
        cardContainer.appendChild(clone);
    });
};
