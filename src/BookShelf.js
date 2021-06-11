import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentlyReading from "./components/CurrentlyReading";
import WantToRead from "./components/WantToRead";
import Read from "./components/Read";
import Search from "./components/Search";

const App = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await fetch("http://localhost:3001/books");

    if (!response.ok) {
      throw new Error("Fetch was not successful");
    }

    const data = await response.json();

    setBooks(data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route path="/search">
          <Search books={books} />
        </Route>

        <Route path="/">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MITTReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading />
                <WantToRead />
                <Read />
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
