import { formatForSorting, getFirstWord, getShortestString } from "./stringHandler";

export const displaySearchResults = (books, searchInput) => {
  let resultsFound = [...books].filter((book) => {
    return book.title.toUpperCase().includes(searchInput.toUpperCase().trim());
  });

  resultsFound = sortBySearchedText(resultsFound, searchInput);

  return resultsFound;
};

const firstWordIncludesSearch = (book, searchInput) => {
  const bookFirstWord = getFirstWord(book.title);
  const searchFirstWord = getFirstWord(searchInput);

  if (bookFirstWord.includes(searchFirstWord)) {
    return true;
  }

  return false;
};

const compareLetters = (book1, book2, searchInput) => {
  if (firstWordIncludesSearch(book1, searchInput) && firstWordIncludesSearch(book2, searchInput)) {
    return book2.title.toUpperCase().charCodeAt(0) - book1.title.toUpperCase().charCodeAt(0);
  }

  return 0;
};

const getSortPriority = (book1, book2, searchInput) => {
  if (firstWordIncludesSearch(book1, searchInput) && !firstWordIncludesSearch(book2, searchInput)) {
    return -1;
  }

  if (!firstWordIncludesSearch(book1, searchInput) && firstWordIncludesSearch(book2, searchInput)) {
    return 1;
  }

  return compareLetters(book1, book2, searchInput);
};

const sortBySearchedText = (resultsFound, searchInput) => {
  for (let book of resultsFound) {
    book.formattedTitle = formatForSorting(book.title);
  }

  resultsFound.sort((book1, book2) => {
    const book1Title = book1.formattedTitle;
    const book2Title = book2.formattedTitle;
    const shortestBookTitle = getShortestString(book1Title, book2Title);

    const sortPriority = getSortPriority(book1, book2, searchInput);

    if (sortPriority !== 0) {
      return sortPriority;
    }

    for (let i = 0; i < shortestBookTitle.length; i++) {
      if (book1Title[i] !== book2Title[i]) {
        return book1Title.charCodeAt(i) - book2Title.charCodeAt(i);
      }
    }
  });

  return resultsFound;
};
