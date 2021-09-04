import "./App.css";
import Data from "./db.json";
import React, { useState, useEffect } from "react";
import Shelf from "./components/Shelf";
import Search from "./components/Search";
import { Route, Switch, Link } from "react-router-dom";

const App = () => {
  const [books, setBooks] = useState([]);
  const bookData = [...Data.books];

  for (let i = 0; i < bookData.length; i++) {
    bookData[i].id = i + 1;
  }

  useEffect(() => {
    updateBooks(bookData);
  }, []);

  const updateBooks = (data) => {
    setBooks(data);
  };

  const updateShelfStatus = (valueToUpdateWith, id) => {
    const book = bookData.find((book) => book.id == id);

    if (valueToUpdateWith === book.shelfStatus) {
      return;
    }

    book.shelfStatus = valueToUpdateWith;

    updateBooks(bookData);
  };

  return (
    <div className="app">
      <Switch>
        <Route path="/search">
          <Search
            books={books}
            updateShelfStatus={updateShelfStatus}
          />
        </Route>

        <Route path="/">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MITTReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf
                  shelfTag={"currentlyReading"}
                  books={books}
                  updateShelfStatus={updateShelfStatus}
                />
                <Shelf
                  shelfTag={"wantToRead"}
                  books={books}
                  updateShelfStatus={updateShelfStatus}
                />
                <Shelf
                  shelfTag={"read"}
                  books={books}
                  updateShelfStatus={updateShelfStatus}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to="search">Add a book</Link>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
