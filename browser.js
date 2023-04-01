/* eslint-disable no-param-reassign */
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

// title input
const inpRightName = document.getElementById('inpRightName');

// span with "wrong input" for the title input
const infoTitle = document.getElementById('infoTitle');

// info span for the title input
const infoTitleSpan = document.getElementById('infoTitleSpan');

// mouseover to show the title info span when hovering over the wrong input title span
infoTitle.addEventListener('mouseover', () => {
  infoTitleSpan.style.visibility = 'visible';
});

// mouseover to hide the title info span when not hovering over the wrong input title span
infoTitle.addEventListener('mouseleave', () => {
  infoTitleSpan.style.visibility = 'hidden';
});

// pages input
const inpRightPages = document.getElementById('inpRightPages');

// span with "wrong input" for the pages input
const infoPages = document.getElementById('infoPages');

// info span for pages input
const infoPagesSpan = document.getElementById('infoPagesSpan');

// mouseover to show the page info span when hovering over the wrong input page span
infoPages.addEventListener('mouseover', () => {
  infoPagesSpan.style.visibility = 'visible';
});

// mouseleave to hide the page info span when not hovering over the wrong input page span
infoPages.addEventListener('mouseleave', () => {
  infoPagesSpan.style.visibility = 'hidden';
});

// div for the 'read' radio button input
const readImg = document.getElementById('readImg');

// span to show information about the 'read' radio button input
const readSpan = document.getElementById('readSpan');

// mouseover to show the information about the 'read' radio button input when hovering over it
readImg.addEventListener('mouseover', () => {
  readSpan.style.visibility = 'visible';
});

// eslint-disable-next-line max-len
// mouseleave to hide the information about the 'read' radio button input when not hovering over it
readImg.addEventListener('mouseleave', () => {
  readSpan.style.visibility = 'hidden';
});

// div for the 'reading' radio button input
const readingImg = document.getElementById('readingImg');

// span to show information about the 'reading' radio button input
const readingSpan = document.getElementById('readingSpan');

// mouseover to show the information about the 'reading' radio button input when hovering over it
readingImg.addEventListener('mouseover', () => {
  readingSpan.style.visibility = 'visible';
});

// eslint-disable-next-line max-len
// mouseleave to hide the information about the 'reading' radio button input when not hovering over it
readingImg.addEventListener('mouseleave', () => {
  readingSpan.style.visibility = 'hidden';
});

// div the the 'not read' radio button input
const notReadImg = document.getElementById('notReadImg');

// span to show information about the 'not read' radio button input
const notReadSpan = document.getElementById('notReadSpan');

// mouseover to show the information about the 'not read' radio button input when hovering over it
notReadImg.addEventListener('mouseover', () => {
  notReadSpan.style.visibility = 'visible';
});

// eslint-disable-next-line max-len
// mouseleave to hide the information about the 'not read' radio button input when not hovering over it
notReadImg.addEventListener('mouseleave', () => {
  notReadSpan.style.visibility = 'hidden';
});

// container in which the bookDivs are stored
const bookContainer = document.getElementById('bookContainer');

// form to add a book
const form = document.getElementById('addBookForm');

// button to open the form
const addButton = document.getElementById('addBook');

// button to submit the form
const finishForm = document.getElementById('finishForm');

// div to store the button which opens the form
const addDelete = document.getElementById('addDelete');

// button to close the form
const closeForm = document.getElementById('closeForm');

// function to add a book to the library
function addBookToLibrary(book) {
  myLibrary.push(book);
}

// function to change the read status of a book
function changeReadStatus(button, readStatusP) {
  button.addEventListener('click', () => {
    switch (readStatusP.innerText) {
      case 'read':
        readStatusP.classList = ['notRead'];
        readStatusP.innerText = 'not read';
        break;
      case 'not read':
        readStatusP.classList = ['reading'];
        readStatusP.innerText = 'reading...';
        break;
      case 'reading...':
        readStatusP.classList = ['read'];
        readStatusP.innerText = 'read';
        break;
      default:
        break;
    }
  });
}

// function to adjust the 'Change Read Status' Button
function adjustChangeButton(button) {
  button.innerText = 'Change Status';
  button.classList = ['changeReadButton'];
}

// function to adjust the 'delete Book from Library' Button
function adjustDeleteButton(button, span) {
  span.innerText = 'x';
  button.classList = ['bookDeleteButtons'];
  button.appendChild(span);
}

// function to add an OnClickEventListener to the DeleteButton
function addOnClickDeleteBut(button, bookDiv, object, index) {
  button.addEventListener('click', () => {
    bookDiv.remove();
    object.splice(index, 1);
  });
}

// function to adjust the Class of the reading status p element
function adjustBookReadClass(bookRead) {
  switch (bookRead.innerText) {
    case 'read':
      bookRead.classList = ['read'];
      break;
    case 'not read':
      bookRead.classList = ['notRead'];
      break;
    case 'reading...':
      bookRead.classList = ['reading'];
      break;
    default:
      break;
  }
}

// function to display the books in the book Container
function displayBooks() {
  myLibrary.forEach((book, index, object) => {
    // create the elements
    const bookDiv = document.createElement('div');
    const bookDeleteBut = document.createElement('button');
    const bookDeleteButSpan = document.createElement('span');
    const bookDivTitle = document.createElement('h3');
    const bookDivAuthor = document.createElement('h5');
    const bookDivPages = document.createElement('p');
    const bookChangeStatus = document.createElement('button');
    const bookDivRead = document.createElement('p');

    adjustChangeButton(bookChangeStatus);
    adjustDeleteButton(bookDeleteBut, bookDeleteButSpan);
    changeReadStatus(bookChangeStatus, bookDivRead);
    addOnClickDeleteBut(bookDeleteBut, bookDiv, object, index);

    // write the book information into the elements
    bookDivTitle.innerText = book.title;
    bookDivAuthor.innerText = `by ${book.author}`;
    bookDivPages.innerText = `Pages: ${book.pages}`;
    bookDivRead.innerText = book.read;

    adjustBookReadClass(bookDivRead);
    // add the divs together
    // eslint-disable-next-line max-len
    bookDiv.append(bookDeleteBut, bookDivTitle, bookDivAuthor, bookDivPages, bookChangeStatus, bookDivRead);
    bookContainer.appendChild(bookDiv);
    bookDiv.classList.add('bookDiv');
  });
}

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

// function to just close the form and don't safe anything
function closeFormFunction() {
  makeAllUnBlurred();
  form.classList = ['invis'];
  addButton.disabled = false;
  if (form.bookPages.value === 'unknown') {
    form.bookPages.value = '';
  }
  if (form.bookAuthor.value === 'unknown Author') {
    form.bookAuthor.value = '';
  }
}

// add the OnClickEventListener to make the Form Visible
addButton.addEventListener('click', makeFormVisible);

// add the OnClickEventListener to close the Form and save the necessary information
finishForm.addEventListener('click', dontSendForm, false);

// add the OnClickEventListener to close the Form without saving anything
closeForm.addEventListener('click', closeFormFunction);

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
