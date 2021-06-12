export const displaySearchResults = (books, searchInput) => {
  let resultsFound = [...books].filter((book) => {
    return book.title.toUpperCase().includes(searchInput.toUpperCase().trim());
  });

  resultsFound = sortBySearchedText(resultsFound, searchInput);

  return resultsFound;
};

const sortBySearchedText = (resultsFound, searchInput) => {
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

  return resultsFound;
};
