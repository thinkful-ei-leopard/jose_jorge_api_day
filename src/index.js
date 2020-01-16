
import $ from 'jquery';

import 'normalize.css';
import './index.css';

import api from './api';

import shoppingList from './shopping-list';


api.getItems()
  .then(response => response.json());
  .then(response => console.log(response))

// .then(res => console.log(res));

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);


// added comment
