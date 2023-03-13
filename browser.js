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
    const bookDivPages = document.createElement('p');
    const bookDivRead = document.createElement('p');
    bookDivTitle.innerText = book.title;
    bookDivAuthor.innerText = `by ${book.author}`;
    bookDivPages.innerText = `Pages: ${book.pages}`;
    bookDivRead.innerText = book.read;
    bookDivRead.id = bookDivRead.innerText === 'read' ? 'read' : 'notRead';
    bookDiv.append(bookDivTitle, bookDivAuthor, bookDivPages, bookDivRead);
    container.appendChild(bookDiv);
    bookDiv.classList.add('bookDiv');
  });
}

const addButton = document.getElementById('addBook');
addButton.addEventListener('click', makeFormVisible);
const form = document.getElementById('addBookForm');

function makeFormVisible() {
  form.classList = ['visible'];
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
