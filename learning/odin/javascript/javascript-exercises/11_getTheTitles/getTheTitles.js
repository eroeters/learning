const getTheTitles = function (books) {
  // create initial array
  let bookArray = [];
  //   for...of loop to iterate through given arrays
  for (book of books) {
    // push book title to array
    bookArray.push(book.title);
  }
  return bookArray;
};

// Do not edit below this line
module.exports = getTheTitles;
