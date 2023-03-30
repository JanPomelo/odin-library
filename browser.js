// initialize library array
const myLibrary = [];

// initialize book object
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

// function to add a book to the library
function addBookToLibrary(book) {
  myLibrary.push(book);
}
// container in which the bookDivs are stored
const bookContainer = document.getElementById('bookContainer');

// function to display the books in the book Container
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
// form to add a book
const form = document.getElementById('addBookForm');
// button to open the form
const addButton = document.getElementById('addBook');
// button to submit the form
const finishForm = document.getElementById('finishForm');
// div to store the button which opens the form
const addDelete = document.getElementById('addDelete');

// function to blurr everything except the form
function makeAllBlurred() {
  bookContainer.classList = ['blurred'];
  addDelete.classList = ['blurred'];
}

// function to unblurr everything
function makeAllUnBlurred() {
  bookContainer.classList = [''];
  addDelete.classList = [''];
}

// function to make the form visible
function makeFormVisible() {
  makeAllBlurred();
  addButton.disabled = true;
  form.bookName.value = '';
  form.classList = ['visible'];
}

// function to clear the bookContainer div in order to add all new divs again
function clearContainer() {
  const allBookDivs = Array.from(document.getElementsByClassName('bookDiv'));
  allBookDivs.forEach((book) => { book.remove(); });
}

// function to check if the pages input contains only numbers or nothing
function checkPages() {
  if (form.bookPages.value === '') {
    form.bookPages.value = 'unknown';
    return true;
  }
  if (form.bookPages.value.match(/^\d+$/)) {
    return true;
  }
  return false;
}

// function to check the title input (need to contain at least 1 character)
function checkTitle() {
  if (form.bookName.value === '') {
    return false;
  }
  return true;
}
// function to check the author input and write unknown if something is missing
function checkAuthor() {
  if (form.bookAuthor.value === '') {
    form.bookAuthor.value = 'unknown Author';
  }
}

const inpRightName = document.getElementById('inpRightName');

const inpRightPages = document.getElementById('inpRightPages');

const infoPages = document.getElementById('infoPages');

const infoPagesSpan = document.getElementById('infoPagesSpan');

infoPages.addEventListener('mouseover', () => {
  infoPagesSpan.style.visibility = 'visible';
});

infoPages.addEventListener('mouseleave', () => {
  infoPagesSpan.style.visibility = 'hidden';
});

const infoTitle = document.getElementById('infoTitle');

const infoTitleSpan = document.getElementById('infoTitleSpan');

infoTitle.addEventListener('mouseover', () => {
  infoTitleSpan.style.visibility = 'visible';
});

infoTitle.addEventListener('mouseleave', () => {
  infoTitleSpan.style.visibility = 'hidden';
});
// function to check the form before submitting
function checkForm() {
  let allRight = true;
  if (!checkPages()) {
    inpRightPages.classList = ['inpWrong'];
    allRight = false;
  } else {
    inpRightPages.classList = ['inpRight'];
  }
  if (!checkTitle()) {
    inpRightName.classList = ['inpWrong'];
    allRight = false;
  } else {
    inpRightName.classList = ['inpRight'];
  }
  if (allRight) {
    inpRightPages.classList = ['inpRight'];
    inpRightName.classList = ['inpRight'];
    checkAuthor();
    return true;
  }
  return false;
}

// function to surpress the form sending and call the necessary forms to add the new book
function dontSendForm(event) {
  if (checkForm()) {
    // eslint-disable-next-line max-len
    addBookToLibrary(
      new Book(
        form.bookName.value,
        form.bookAuthor.value,
        form.bookPages.value,
        form.readCheck.value,
      ),
    );
    clearContainer();
    displayBooks();
    makeAllUnBlurred();
    form.classList = ['invis'];
    addButton.disabled = false;
  }
  if (form.bookPages.value === 'unknown') {
    form.bookPages.value = '';
  }
  if (form.bookAuthor.value === 'unknown Author') {
    form.bookAuthor.value = '';
  }
  event.preventDefault();
  return false;
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
