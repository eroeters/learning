let bookList = document.querySelector(".bookList");
const bookInput = document.querySelector(".bookInput");

const myLibrary = [];

function Book(title, author, date) {
  this.title = title;
  this.author = author;
  this.date = date;
}

function addBooktoLibrary() {
  for (i = 0; i < myLibrary.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("data-index", i);
    let book = {
      title: document.createElement("div"),
      author: document.createElement("div"),
      date: document.createElement("div"),
      delBtn: document.createElement("button"),
    };
    book.title.innerText = `Title: ${book.title}`;
    book.title.author = `Author: ${book.author}`;
    book.title.date = `Date: ${book.date}`;

    bookList.appendChild(div);
    console.log(myLibrary[i]);

    for (const e in book) {
      div.appendChild(book[e]);
    }

    btn.addEventListener("click", () => {
      // bookCard.remove();
      console.log("remove button clicked");
    });
  }
}

addBooktoLibrary();

// function addBooktoLibrary() {
//   for (let i = 0; i < myLibrary.length; i++) {
//     let titleInput = document.querySelector("#title-input");
//     let authorInput = document.querySelector("#author-input");
//     let dateInput = document.querySelector("#date-input");

//     title = titleInput.value;
//     author = authorInput.value;
//     date = dateInput.value;

//     const book = new Book(title, author, date);
//     myLibrary.push(book);
//     displayBooks(book);
//     console.log(myLibrary);
//   }
// }

// function displayBooks(book) {
//   let div = document.createElement("div");
//   let bookInfo = document.createElement("div");
//   let bookTitle = document.createElement("p");
//   let bookAuthor = document.createElement("p");
//   let bookDate = document.createElement("p");
//   let btn = document.createElement("button");

//   div.classList.add("bookCard");
//   bookInfo.classList.add("bookInfo");
//   bookTitle.classList.add("bookTitle");
//   bookAuthor.classList.add("bookAuthor");
//   bookDate.classList.add("bookDate");
//   btn.classList.add("removeBtn");
//   btn.setAttribute("title", "Remove Book");

//   bookTitle.textContent = `Title: ${book.title}`;
//   bookAuthor.textContent = `Author: ${book.author}`;
//   bookDate.textContent = `Date: ${book.date}`;
//   btn.textContent = "Remove";

//   bookList.appendChild(div);
//   div.appendChild(bookInfo);
//   bookInfo.append(bookTitle, bookAuthor, bookDate);
//   div.appendChild(btn);

//   btn.addEventListener("click", () => {
//     // bookCard.remove();
//     console.log("remove button clicked");
//   });
// }

bookInput.addEventListener("click", (e) => {
  e.preventDefault();
  addBooktoLibrary();
});
