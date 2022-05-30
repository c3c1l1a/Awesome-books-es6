export default class View {
  constructor() {
    this.addNewPage = document.querySelector('.nav-add-new');
    this.listBooksPage = document.querySelector('.nav-list-books');
    this.contactPage = document.querySelector('.nav-contact');
    this.form = document.querySelector('form');
    this.mainTag = document.querySelector('main');

    this.listBooksPage.classList.add('blue');
  }

  removeOldTemplates() {
    this.listBooksPage.classList.remove('blue');
    this.contactPage.classList.remove('blue');
    this.addNewPage.classList.remove('blue');

    const oldBooksContainer = document.querySelector('.list-books-page-container');
    const oldFormPage = document.querySelector('.form-page-container');
    const oldContactContainer = document.querySelector('.contact-page-container');

    if (oldBooksContainer !== null) {
      oldBooksContainer.parentNode.removeChild(oldBooksContainer);
    }

    if (oldFormPage !== null) {
      oldFormPage.parentNode.removeChild(oldFormPage);
    }

    if (oldContactContainer !== null) {
      oldContactContainer.parentNode.removeChild(oldContactContainer);
    }
  }

  handleNav(model) {
    this.addNewPage.addEventListener('click', (e) => {
      e.preventDefault();
      this.removeOldTemplates();

      e.target.classList.add('blue');

      const mainTag = document.querySelector('main');
      const formPage = document.querySelector('.form-page');
      const formTemplate = formPage.content.firstElementChild.cloneNode(true);

      mainTag.appendChild(formTemplate);
      this.handleSubmit(model);
    });

    this.listBooksPage.addEventListener('click', (e) => {
      e.preventDefault();
      this.removeOldTemplates();

      e.target.classList.add('blue');
      this.renderBooks(model);
    });

    this.contactPage.addEventListener('click', (e) => {
      e.preventDefault();
      this.removeOldTemplates();

      e.target.classList.add('blue');

      const mainTag = document.querySelector('main');
      const contactPage = document.querySelector('.contact-page');
      const contactPageTemplate = contactPage.content.firstElementChild.cloneNode(true);
      mainTag.appendChild(contactPageTemplate);
    });
  }

  handleSubmit(model) {
    this.form = document.querySelector('form');
    if (this.form !== null) {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const bookItem = Object.fromEntries(new FormData(e.target).entries());
        model.setBookItem(bookItem);
        e.target.reset();
      });
    }
  }

  renderBooks(model) {
    const listPage = document.querySelector('.list-books-page');
    const listPageTemplate = listPage.content.firstElementChild.cloneNode(true);
    const booksContainer = listPageTemplate.querySelector('.books-container');
    const books = model.getBooks();

    books.forEach((item, index) => {
      const bookTemplate = document.querySelector('.book-template');
      const book = bookTemplate.content.firstElementChild.cloneNode(true);
      if (index % 2 === 0) {
        book.classList.add('grey');
      }
      const bookTitle = book.querySelector('.book-title');
      bookTitle.textContent = item.title;

      const bookAuthor = book.querySelector('.book-author');
      bookAuthor.textContent = item.author;

      const removeBookButton = book.querySelector('.remove-book');
      removeBookButton.addEventListener('click', (e) => {
        e.preventDefault();
        model.removeBookItem(index);
        book.parentNode.removeChild(book);
      });

      if (booksContainer !== null) {
        booksContainer.appendChild(book);
        listPageTemplate.appendChild(booksContainer);
      }
    });
    this.mainTag.appendChild(listPageTemplate);
  }
}