import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const Search = ({ books, updateBooks }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [displaySearchText, setDisplaySearchText] = useState("");
  const searchResultsLength = searchResults.length;

  useEffect(() => {
    if (searchInput === "") {
      setDisplaySearchText("");
      return;
    }
    setDisplaySearchText(
      `Your Search Returned ${searchResultsLength} ${
        searchResultsLength === 1 ? "result" : "results"
      }`
    );
  }, [searchInput]);

  const displaySearchResults = (event) => {
    const searchInput = event.target.value.toUpperCase();

    if (searchInput === "") {
      setSearchResults([]);
      return;
    }

    const resultsFound = [...books].filter((book) => {
      return book.title.toUpperCase().includes(searchInput.toUpperCase());
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
            onChange={(event) => {
              displaySearchResults(event);
              setSearchInput(event.target.value)
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <div className="results-quantity">{displaySearchText}</div>
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
                shelfStatus={book.shelfStatus}
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
