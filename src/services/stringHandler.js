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
  return string.replace(/\s+/g, "").length <= 1;
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

export const formatForSorting = (string)=>{
  return removeWhiteSpace(string).toUpperCase();
}