import { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const Search = ({ books, updateBooks }) => {
  const [searchResults, setSearchResults] = useState([]);
  const searchResultsLength = searchResults.length;

  const displaySearchResults = (event) => {
    const searchInput = event.target.value.toUpperCase();

    if (searchInput === "") {
      setSearchResults([]);
      return;
    }

    const resultsFound = [...books].filter((book) => {
      return book.title.toUpperCase().includes(searchInput);
    });

    setSearchResults(resultsFound);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="index.html">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={displaySearchResults}
          />
        </div>
      </div>
      <div className="search-books-results">
        <div className="results-quantity">
          Your search returned {searchResults.length} {searchResultsLength === 1 ? 'result' : 'results'}.
        </div>
        <ol className="books-grid">
          {searchResults.map((book, index) => {
            const images = book.imageLinks;

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
          })}
        </ol>
      </div>
    </div>
  );
};

export default Search;
