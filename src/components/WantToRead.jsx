import Book from "./Book";

const WantToRead = ({books, updateBooks}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want To Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {books.map((book, index) => {
            const images = book.imageLinks;

            if (book.shelfStatus === "wantToRead") {
              return (
                <Book
                  title={book.title}
                  authors={book.authors}
                  image={
                    images !== undefined
                      ? book.imageLinks.thumbnail
                      : "./no-cover.jpg"
                  }
                  id={book.id}
                  key={index}
                  updateBooks={updateBooks}
                />
              );
            }
          })}
        </ol>
      </div>
    </div>
  );
};

export default WantToRead;
