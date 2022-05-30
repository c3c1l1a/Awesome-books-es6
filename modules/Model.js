export default class Model {
  constructor() {
    if (!localStorage.getItem('books')) {
      localStorage.setItem('books', JSON.stringify([]));
      this.booksData = JSON.parse(localStorage.getItem('books'));
    } else {
      this.booksData = JSON.parse(localStorage.getItem('books'));
    }
  }

  setBookItem(bookItem) {
    this.booksData.push(bookItem);
    localStorage.setItem('books', JSON.stringify(this.booksData));
  }

  removeBookItem(index){
    this.booksData.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.booksData));
  }

  getBooks() {
    return this.booksData;
  }
}
