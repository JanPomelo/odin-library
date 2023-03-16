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

const bookContainer = document.getElementById('bookContainer');

function displayBooks() {
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
    bookContainer.appendChild(bookDiv);
    bookDiv.classList.add('bookDiv');
  });
}

const form = document.getElementById('addBookForm');
const addButton = document.getElementById('addBook');
const finishForm = document.getElementById('finishForm');

function makeFormVisible() {
  form.classList = ['visible'];
}

function clearContainer() {
  const allBookDivs = Array.from(document.getElementsByClassName('bookDiv'));
  allBookDivs.forEach((book) => { book.remove(); });
}

function dontSendForm(event) {
  // eslint-disable-next-line max-len
  addBookToLibrary(new Book(form.bookName.value, form.bookAuthor.value, form.bookPages.value, form.readCheck.value));
  clearContainer();
  displayBooks();
  form.classList = ['invis'];
  event.preventDefault();
}

addButton.addEventListener('click', makeFormVisible);
finishForm.addEventListener('click', dontSendForm, false);

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
