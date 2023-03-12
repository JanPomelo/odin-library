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

function displayBooks() {
  const container = document.getElementById('container');
  myLibrary.forEach((book) => {
    const bookDiv = document.createElement('div');
    const bookDivTitle = document.createElement('h3');
    const bookDivAuthor = document.createElement('h5');
    const bookDivInfo = document.createElement('p');
    bookDivInfo.innerHTML = book.info();
    bookDiv.appendChild(bookDivInfo);
    container.appendChild(bookDiv);
    bookDiv.classList.add('bookDiv');
  });
}

const book1 = new Book('Harry Potter and the Philosophers Stone', 'J.K. Rowling', 248, 'read');

const book2 = new Book(
  'Harry Potter and the Chamber of Secrets',
  'J.K. Rowling',
  251,
  'not read',
);
addBookToLibrary(book1);
addBookToLibrary(book2);
displayBooks();
