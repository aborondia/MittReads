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

export const stringEmpty = (string) => {
  return string.replace(/\s+/g, "") === "";
};
