module.exports = {
  getBooks: (req, res) => {
    BookService.getBooks().then(
      (books) => {
        res.ok(books);
      },
      (error) => {
        res.serverError(error);        
      }
    );
  },
  getBook: (req, res) => {
    const bookId = req.param("id");
    BookService.getBook(bookId).then(
      (books) => {
        res.ok(books);
      },
      (error) => {
        res.serverError(error);
      }
    );
  },
};

