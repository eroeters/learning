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

  if (title === "" || author === "" || date === "") {
    alert("Please fill out the required fields");
  } else {
    for (i = 0; i < myLibrary.length; i++);
    {
      const book = new Book(title, author, date);

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
      btn.setAttribute("title", "Remove Book");

      bookTitle.textContent = `Title: ${book.title}`;
      bookAuthor.textContent = `Author: ${book.author}`;
      bookDate.textContent = `Date: ${book.date}`;
      btn.textContent = "Remove";

      bookList.appendChild(div);
      div.appendChild(bookInfo);
      bookInfo.append(bookTitle, bookAuthor, bookDate);
      div.appendChild(btn);

      btn.addEventListener("click", () => {
        myLibrary.splice(i, 1);
        console.log("remove button clicked");
      });

      myLibrary.push(book);
      // displayBooks(book);
      console.log(myLibrary);
      console.log(i);
      i++;
    }
  }
});

// function displayBooks(book) {
// let div = document.createElement("div");
// let bookInfo = document.createElement("div");
// let bookTitle = document.createElement("p");
// let bookAuthor = document.createElement("p");
// let bookDate = document.createElement("p");
// let btn = document.createElement("button");

// div.classList.add("bookCard");
// bookInfo.classList.add("bookInfo");
// bookTitle.classList.add("bookTitle");
// bookAuthor.classList.add("bookAuthor");
// bookDate.classList.add("bookDate");
// btn.classList.add("removeBtn");
// btn.setAttribute("title", "Remove Book");

// bookTitle.textContent = `Title: ${book.title}`;
// bookAuthor.textContent = `Author: ${book.author}`;
// bookDate.textContent = `Date: ${book.date}`;
// btn.textContent = "Remove";

// bookList.appendChild(div);
// div.appendChild(bookInfo);
// bookInfo.append(bookTitle, bookAuthor, bookDate);
// div.appendChild(btn);

// btn.addEventListener("click", () => {
//   myLibrary.splice(i, 1);
//   console.log("remove button clicked");
// });
// }
