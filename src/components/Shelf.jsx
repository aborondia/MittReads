import Book from "./Book";
import { propertyNameToProperName } from "../services/stringHandler";

const Shelf = ({ shelfTag, books, updateBooks }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{propertyNameToProperName(shelfTag)}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, index) => {
            const images = book.imageLinks;

            if (book.shelfStatus === shelfTag) {
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
                  shelfStatus={book.shelfStatus}
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

export default Shelf;
