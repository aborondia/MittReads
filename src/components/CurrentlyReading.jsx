const CurrentlyReading = () => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover"></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="move" disabled="">
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">Android Fully Loaded</div>
              <div className="book-authors">Rob Huddleston</div>
            </div>
          </li>
          <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover"></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="move" disabled="">
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">Android User Interface Design</div>
              <div className="book-authors">Ian G. Clifton</div>
            </div>
          </li>
          <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover"></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="move" disabled="">
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">Android Quick APIs Reference</div>
              <div className="book-authors">Onur Cinar</div>
            </div>
          </li>
          <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover"></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="move" disabled="">
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">Banting</div>
              <div className="book-authors">Michael Bliss</div>
            </div>
          </li>
          <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover"></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="move" disabled="">
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">Comics</div>
              <div className="book-authors">Vincent Cecolini, John Nubbin</div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default CurrentlyReading;
