import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const Search = ({ books, updateBooks }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [displaySearchText, setDisplaySearchText] = useState("");
  const searchResultsLength = searchResults.length;

  useEffect(() => {
    displaySearchResults();
  }, [searchInput]);

  const sortBySearchedText = (resultsFound) => {
    resultsFound.sort((a, b) => {
      for (let letter of searchInput) {
        if (a.title[0] === "") {
          return 0;
        }

        if (a.title[0].toUpperCase() === letter) {
          return -1;
        }
      }
    });

    setDisplaySearchText(
      `Your Search Returned ${resultsFound.length} ${
        resultsFound.length === 1 ? "result" : "results"
      }`
    );

    return resultsFound;
  };

  const displaySearchResults = () => {
    if (searchInput.replace(/\s+/g, "") === "") {
      setDisplaySearchText("");
      setSearchResults([]);
      return;
    }

    let resultsFound = [...books].filter((book) => {
      return book.title
        .toUpperCase()
        .includes(searchInput.toUpperCase().trim());
    });

    resultsFound = sortBySearchedText(resultsFound);

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
