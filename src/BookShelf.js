import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentlyReading from "./components/CurrentlyReading";
import WantToRead from "./components/WantToRead";
import Read from "./components/Read";
import Search from "./components/Search";
import { getBooks } from "./services/apiHandler";

const App = () => {
  const [books, setBooks] = useState([]);

  const updateBooks = (data) => {
    setBooks(data);
  };

  useEffect(() => {
    getBooks(updateBooks);
  }, []);

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
                <CurrentlyReading books={books} updateBooks={updateBooks} />
                <WantToRead books={books} updateBooks={updateBooks} />
                <Read books={books} updateBooks={updateBooks} />
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
