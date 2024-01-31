let bookList = document.querySelector(".bookList");
const bookInput = document.querySelector(".bookInput");

const myLibrary = [];

function Book(title, author, date) {
  this.title = title;
  this.author = author;
  this.date = date;
}

bookInput.addEventListener("click", (event) => {
  event.preventDefault();
  let titleInput = document.querySelector("#title-input");
  let authorInput = document.querySelector("#author-input");
  let dateInput = document.querySelector("#date-input");

  title = titleInput.value;
  author = authorInput.value;
  date = dateInput.value;

  if (title === "" || authorInput === "" || dateInput === "") {
    alert("Please fill out the required fields");
  } else {
    const book = new Book(title, author, date);
    myLibrary.push(book);
    displayBooks(book);
    console.log(myLibrary);
  }
});

function displayBooks(book) {
  let div = document.createElement("div");
  let bookInfo = document.createElement("div");
  let bookTitle = document.createElement("p");
  let bookAuthor = document.createElement("p");
  let bookDate = document.createElement("p");
  let btn = document.createElement("button");

  div.classList.add("bookCard");
  bookInfo.classList.add("bookInfo");
  bookTitle.classList.add("bookTitle");
  bookAuthor.classList.add("bookAuthor");
  bookDate.classList.add("bookDate");
  btn.classList.add("removeBtn");

  bookTitle.textContent = `Title: ${book.title}`;
  bookAuthor.textContent = `Author: ${book.author}`;
  bookDate.textContent = `Date: ${book.date}`;
  btn.textContent = "X";

  bookList.appendChild(div);
  div.appendChild(bookInfo);
  bookInfo.append(bookTitle, bookAuthor, bookDate);
  div.appendChild(btn);

  div.addEventListener("click", () => {
    console.log("remove button clicked");
  });
}
