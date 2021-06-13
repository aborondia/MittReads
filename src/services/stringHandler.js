export const propertyNameToProperName = (propertyName) => {
  switch (propertyName) {
    case "currentlyReading":
      return "Currently Reading";
    case "wantToRead":
      return "Want to Read";
    case "read":
      return "Read";
    default:
      return "";
  }
};

export const stringTooShort = (string) => {
  return string.replace(/\s+/g, "").length <= 0;
};

export const stringToWordsArray = (string) => {
  const wordArray = [];
  let currentWord = "";

  for (let letter of string) {
    if (letter !== " ") {
      currentWord += letter;
    } else {
      wordArray.push(currentWord);
      currentWord = "";
    }
  }

  return wordArray;
};

export const removeWhiteSpace = (string) => {
  return string.replace(/\s+/g, "");
};

export const formatForSorting = (string) => {
  return removeWhiteSpace(string).toUpperCase();
};

export const getFirstWord = (string) => {
  const cleanString = string.trim().toUpperCase();
  let firstWord = "";

  for (let letter of cleanString) {
    if (letter === " ") {
      return firstWord;
    }
    firstWord += letter;
  }

  return firstWord;
};

export const getShortestString = (string1, string2) => {
  return string1.length <= string2.length ? string1 : string2;
};
