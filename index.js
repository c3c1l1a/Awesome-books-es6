import Controller from './modules/Controller.js';
import Model from './modules/Model.js';
import View from './modules/View.js';

window.onload = () => {
  const controller = new Controller(new Model(), new View());
  controller.listBooks();
};
