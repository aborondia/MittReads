import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import { displaySearchResults } from "../services/searchHandler";

const Search = ({ books, updateBooks }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [displaySearchText, setDisplaySearchText] = useState("");

  useEffect(() => {
    if (searchInput.replace(/\s+/g, "") === "") {
      setDisplaySearchText("");
      setSearchResults([]);
      return;
    }

    const resultsFound = displaySearchResults(books, searchInput);

    setSearchResults(resultsFound);
    setDisplaySearchText(
      `Your Search Returned ${resultsFound.length} ${
        resultsFound.length === 1 ? "result" : "results"
      }`
    );
  }, [searchInput]);

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
              setSearchInput(event.target.value.toUpperCase());
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
