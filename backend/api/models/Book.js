const books = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    publicationYear: 1997,
    author: 3,
  },
  {
    id: 2,
    title: "The Fellowship of the Ring",
    publicationYear: 1954,
    author: 1,
  },
  {
    id: 3,
    title: "A Game of Thrones",
    publicationYear: 1996,
    author: 2,
  },
];

module.exports = {
  getBooksFromDatabase: (bookId) => {
    return new Promise((ok, fail) => {
      if (bookId) {
        const parsedBookId = parseInt(bookId);
        if (isNaN(parsedBookId)) {
          return fail("Book id must be a number");
        }
        console.log("parsedBookId", parsedBookId, typeof parsedBookId);
        const book = books.find((b) => b.id === parsedBookId);
        return ok(book);
      }
      ok(books);
    });
  },
};

