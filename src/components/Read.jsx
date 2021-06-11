const Read = () => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
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
              <div className="book-title">Android Apps Security</div>
              <div className="book-authors">Sheran Gunasekera</div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Read;
