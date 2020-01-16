
export default {
    getItems,
    createItem,
    updateItem
};

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/[joselopez]';

function getItems() {
 return fetch(`${BASE_URL}/items`); 
}

function createItem(name) {
    let newItem = JSON.stringify({
        name: name
    })
    return fetch(`${BASE_URL}/items`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: newItem
    })
}

function updateItem(id, updateData) {
    fetch(`${BASE_URL}/items/${id}`, {
        method: 'PATCH',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(updateData)
    })
}