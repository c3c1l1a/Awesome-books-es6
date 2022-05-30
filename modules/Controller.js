export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.handleSubmit(this.model);
    this.view.handleNav(this.model);
    this.view.renderDateTime();
  }

  listBooks() {
    this.view.renderBooks(this.model);
  }
}
