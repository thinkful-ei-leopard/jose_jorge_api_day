
export default {
    getItems
};

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/[joselopez]';

function getItems() {
 return fetch(`${BASE_URL}/items`); 

//     return Promise.resolve('A successful response!');
// 
}