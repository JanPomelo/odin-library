const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const book1 = new Book('Harry Potter und der Stein der Weisen', 'J.K. Rowling', 248, 'read');

addBookToLibrary(book1);
console.log(myLibrary);
console.log(book1.info());