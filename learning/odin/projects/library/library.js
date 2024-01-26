let bookList = document.querySelector(".bookList");

const myLibrary = [];

function Book(title, author, date) {
  this.title = title;
  this.author = author;
  this.date = date;
}

function addBookToLibrary() {}

function displayLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    // bookList.textContent = `${myLibrary[i].title} by ${myLibrary[i].author} written in ${myLibrary[i].date}`;
    let newPara = document.createElement("p");
    let node = document.createTextNode(
      `${myLibrary[i].title} by ${myLibrary[i].author} written in ${myLibrary[i].date}`
    );
    bookList.appendChild(node);
  }
}

const test = new Book("Test Book", "Test Author", 1949);
const test1 = new Book("Test Book 2", "Test Author 2", 1950);
const test2 = new Book("Test Book 3", "Test Author 3", 1951);
const test3 = new Book("Test Book 4", "Test Author 4", 1952);
myLibrary.push(test);
myLibrary.push(test1);
myLibrary.push(test2);
myLibrary.push(test3);
// console.dir(myLibrary);
// bookList.textContent = `${myLibrary[0].title} by ${myLibrary[0].author} written in ${myLibrary[0].date}`;
