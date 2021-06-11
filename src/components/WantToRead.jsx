const WantToRead = () => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want To Read</h2>
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
              <div className="book-title">Android</div>
              <div className="book-authors">Paul J. Ward</div>
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
              <div className="book-title">Android Design Patterns</div>
              <div className="book-authors">Greg Nudelman</div>
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
              <div className="book-title">
                Android Ice Cream Sandwich Superguide (PCWorld Superguides)
              </div>
              <div className="book-authors"></div>
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
              <div className="book-title">Android Wearable Programming</div>
              <div className="book-authors">Steven F. Daniel</div>
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
              <div className="book-title">Batman</div>
              <div className="book-authors">
                Frank Miller, Klaus Janson, Lynn Varley
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default WantToRead;
