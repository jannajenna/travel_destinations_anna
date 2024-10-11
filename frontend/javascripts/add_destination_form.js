import { newDestination } from "./api.js";
import { formatDate } from "./formate_date.js";

export async function addDestinationForm() {
    const title = document.getElementById('title').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const dateFrom = document.getElementById('date_from').value;
    const dateTo = document.getElementById('date_to').value;
    const description = document.getElementById('description').value;
    //Images

    //Formate the data
    const formattedDateFrom = formatDate(dateFrom);
    const formattedDateTo = formatDate(dateTo);

    const data = {
        title,
        city,
        country,
        dateFrom: formattedDateFrom, // Use formatted date
        dateTo: formattedDateTo,
        description
        //Images
    };

    console.log(data);

    const addDestination = await newDestination(data);

    return addDestination;

};
