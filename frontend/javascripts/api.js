//Handle API calls 

//Geting the data fromt he back end
const url = "http://localhost:3003/destinations";


//Get all destinations
export async function getAllDestinations() {
    try {
        const responseJson = await fetch(url, {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        });
        if (!responseJson.ok) {
            throw new Error(`Response status: ${responseJson.status}`);
        }
        const destinations = await responseJson.json();
        console.log('Fetched data:', destinations);
        return destinations;

    } catch (error) {
        console.error(error);
    };
};

//Add a new destination
export async function newDestination(data) {
    try {
        const responseJson = await fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!responseJson.ok) {
            throw new Error(`Response status: ${responseJson.status}`);
        }
        const newDestination = await responseJson.json();
        console.log('Added data:', newDestination);
        return newDestination;

    } catch (error) {
        console.error(error.message);
        return null;
    };

};

//Delete a destination
export async function deleteDestination(id) {
    try {
        const responseJson = await fetch(`http://localhost:3003/destinations/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
        });
        if (!responseJson.ok) {
            throw new Error(`Response status: ${responseJson.status}`);
        };
        console.log('Destination deleted:', id);
        return true;
    } catch (error) {
        console.error(error);
        return null;
    };

};

//Modify a destination

export async function modifyDestination(id, data) {
    try {
        const responseJson = await fetch(`http://localhost:3003/destinations/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!responseJson.ok) {
            throw new Error(`Response status: ${responseJson.status}`);
        };
        console.log('Destination modified:', id);
        const modifiedDestination = await responseJson.json();
        return modifiedDestination;
    } catch (error) {
        console.error(error);
        return null;
    };

};