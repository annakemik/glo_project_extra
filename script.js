const wordCorrection = function (word) {
  if (typeof word !== "string") {
    return "Not a string!";
  }
  word = word.trim();
  if (word.length >= 30) {
    return word.slice(0, 30) + "...";
  } else {
    return word;
  }
};
