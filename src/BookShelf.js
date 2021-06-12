import "./App.css";
import React, { useState, useEffect } from "react";
import Shelf from "./components/Shelf";
import Search from "./components/Search";
import { getBooks } from "./services/apiHandler";
import { Route, Switch, Link } from "react-router-dom";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks(updateBooks);
  }, []);

  const updateBooks = (data) => {
    setBooks(data);
  };

  return (
    <div className="app">
      <Switch>
        <Route path="/search">
          <Search books={books} updateBooks={updateBooks} />
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
                  updateBooks={updateBooks}
                />
                <Shelf
                  shelfTag={"wantToRead"}
                  books={books}
                  updateBooks={updateBooks}
                />
                <Shelf
                  shelfTag={"read"}
                  books={books}
                  updateBooks={updateBooks}
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

export const hello = () => {
  console.log("hello");
};

export default App;
