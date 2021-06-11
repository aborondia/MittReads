import { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const Search = ({ books }) => {
  const [searchResults, setSearchResults] = useState([]);

  const displaySearchResults = (event) => {
    const searchInput = event.target.value.toUpperCase();
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
        <div className="results-quantity">Your search returned 10 results.</div>
        <ol className="books-grid">
          {searchResults.map((book, index) => {
            const images = book.imageLinks;
            
            return (
              <Book
                title={book.title}
                authors={book.authors}
                image={images !== undefined ?  book.imageLinks.thumbnail : './no-cover.jpg'}
                key={index}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Search;
