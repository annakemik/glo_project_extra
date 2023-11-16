const wordCorrection = function (word) {
  if (typeof word !== "string") {
    console.log("Not a string!");
  } else {
    word = word.trim();
    if (word.length >= 30) {
      return word.slice(0, 29) + "...";
    } else {
      return word;
    }
  }
};
