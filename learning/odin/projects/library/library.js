let bookList = document.querySelector(".bookList");
const bookInput = document.querySelector(".bookInput");

const myLibrary = [];

function Book(title, author, date) {
  this.title = title;
  this.author = author;
  this.date = date;
}

function addBook() {
  let titleInput = document.querySelector("#title-input");
  let authorInput = document.querySelector("#author-input");
  let dateInput = document.querySelector("#date-input");

  title = titleInput.value;
  author = authorInput.value;
  date = dateInput.value;

  const book = new Book(title, author, date);
  myLibrary.push(book);
  displayBooks(book);
  console.log(myLibrary);
}

function displayBooks(book) {
  let li = document.createElement("li");
  li.classList.add("bookLi");
  li.textContent = `${book.title} by ${book.author} written in ${book.date}`;
  bookList.appendChild(li);
}

// function displayLibrary() {
//   for (let i = 0; i < myLibrary.length; i++) {
//     let li = document.createElement("li");
//     li.classList.add("bookLi");
//     li.textContent = `${myLibrary[i].title} by ${myLibrary[i].author} written in ${myLibrary[i].date}`;
//     bookList.appendChild(li);
//   }
// }

// const test = new Book("Test Book", "Test Author", 1949);
// const test1 = new Book("Test Book 2", "Test Author 2", 1950);
// const test2 = new Book("Test Book 3", "Test Author 3", 1951);
// const test3 = new Book("Test Book 4", "Test Author 4", 1952);
// myLibrary.push(test);
// myLibrary.push(test1);
// myLibrary.push(test2);
// myLibrary.push(test3);
