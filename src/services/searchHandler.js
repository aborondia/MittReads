import { formatForSorting, removeWhiteSpace } from "./stringHandler";

export const displaySearchResults = (books, searchInput) => {
  let resultsFound = [...books].filter((book) => {
    return book.title.toUpperCase().includes(searchInput.toUpperCase().trim());
  });

  resultsFound = sortBySearchedText(resultsFound, searchInput);

  return resultsFound;
};

const sortBySearchedText = (resultsFound, searchInput) => {
  for (let book of resultsFound) {
    book.formattedTitle = formatForSorting(book.title);
  }
  resultsFound.sort((book1, book2) => {
    const book1Title = book1.formattedTitle;
    const book2Title = book2.formattedTitle;
    const shortestBookTitle = book1Title.length < book2Title.length ? book1Title : book2Title;

    for (let i = 0; i < shortestBookTitle.length; i++) {
      if (book1Title[i] !== book2Title[i]) {
        return book1Title.charCodeAt(i) - book2Title.charCodeAt(i);
      }
    }
  });

  return resultsFound;
};
