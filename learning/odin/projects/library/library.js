let bookList = document.querySelector(".bookList");
const bookInput = document.querySelector(".bookInput");

const myLibrary = [];

function Book(title, author, date) {
  this.title = title;
  this.author = author;
  this.date = date;
}

function addBooksToLibrary() {
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
      // create book based on input values from form
      const book = new Book(title, author, date);

      // create elements for card
      let div = document.createElement("div");
      div.setAttribute("data-index", i);
      let bookInfo = document.createElement("div");
      let bookTitle = document.createElement("p");
      let bookAuthor = document.createElement("p");
      let bookDate = document.createElement("p");
      let btn = document.createElement("button");

      // add classes to created elements
      div.classList.add("bookCard");
      bookInfo.classList.add("bookInfo");
      bookTitle.classList.add("bookTitle");
      bookAuthor.classList.add("bookAuthor");
      bookDate.classList.add("bookDate");
      btn.classList.add("removeBtn");
      btn.setAttribute("title", "Remove Book");

      // update created elements with text
      bookTitle.textContent = `Title: ${book.title}`;
      bookAuthor.textContent = `Author: ${book.author}`;
      bookDate.textContent = `Date: ${book.date}`;
      btn.textContent = "Remove";

      // push changes to DOM and library array
      bookList.appendChild(div);
      div.appendChild(bookInfo);
      bookInfo.append(bookTitle, bookAuthor, bookDate);
      div.appendChild(btn);

      myLibrary.push(book);
      console.log(myLibrary);

      // add event listener for remove button
      btn.addEventListener("click", () => {
        myLibrary.splice(btn.parentNode.getAttribute("data-index"), 1);
        btn.parentNode.remove();
        console.log("remove button clicked");
      });
    }
  }
}

bookInput.addEventListener("click", (event) => {
  event.preventDefault();
  addBooksToLibrary();
});
