module.exports = {
  getBooks: async (req, res) => {
    try {
      await BookService.getBooks().then(
        (books) => {
          res.ok(books);
        },
        (error) => {
          res.serverError(error);
        }
      );
    } catch (err) {
      const {name, message} = err;
      console.log({name, message});
    }
  },
  getBook: async (req, res) => {
    try {
      const bookId = req.param('id');
      await BookService.getBook(bookId).then(
        (books) => {
          res.ok(books);
        },
        (error) => {
          res.serverError(error);
        }
      );
    } catch (err) {
      const {name, message} = err;
      console.log({name, message});
    }
  },
};


