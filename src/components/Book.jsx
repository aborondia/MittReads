const Book = ({ title, authors, image, id }) => {
  const updateBookShelfStatus = async (event) => {
    const valueToUpdateWith = event.target.value;
    console.log(event.target.value);
    const response = await fetch("http://localhost:3001/books/bUybAgAAQBAJ/", {
      method: "PATCH",
      headers: { "Content-Type": "application.json" },
      body: JSON.stringify({
        status: valueToUpdateWith,
      }),
    });
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: "128px",
              height: "193px",
              backgroundImage: `url(${image})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onClick={updateBookShelfStatus}>
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
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  );
};

export default Book;
