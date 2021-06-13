import { formatForSorting, getFirstWord, getShortestString, cleanSearchString } from "./stringHandler";

const compareLetters = (book1, book2, searchInput) => {
	const book1Title = book1.title.toUpperCase();
	const book2Title = book1.title.toUpperCase();

	if (firstWordIncludesSearch(book1, searchInput) && firstWordIncludesSearch(book2, searchInput)) {
		return book1Title.charCodeAt(0) - book2Title.charCodeAt(0);
	}

	return 0;
};

const firstWordIncludesSearch = (book, searchInput) => {
	const bookFirstWord = getFirstWord(book.title);
	const searchFirstWord = getFirstWord(searchInput);

	if (bookFirstWord.includes(searchFirstWord)) {
		return true;
	}

	return false;
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
		return null;
	});

	return resultsFound;
};

export const displaySearchResults = (books, searchInput) => {
	let resultsFound = [...books].filter((book) => {
		return book.title.toUpperCase().includes(cleanSearchString(searchInput));
	});

	resultsFound = sortBySearchedText(resultsFound, searchInput);

	return resultsFound;
};

export const getSearchDisplayText = (onOrOff, resultsFoundLength = 0) => {
	if (onOrOff === "on") {
		return `Your Search Returned ${resultsFoundLength} ${resultsFoundLength === 1 ? "result" : "results"}`;
	}

	return "";
};
