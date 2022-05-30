export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.handleSubmit(this.model);
    this.view.handleNav(this.model);
  }

  listBooks() {
    this.view.renderBooks(this.model);
  }
}
