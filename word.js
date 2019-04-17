let Letter = require("./letter");

let Word = function(selectedWord) {
  this.randomWord = [];
  for (let i = 0; i < selectedWord.length; i++) {
    this.randomWord.push(new Letter(selectedWord[i]));
  }
};

Word.prototype.getWord = function() {
  let currentWord = "";
  this.randomWord.forEach(letter => {
    currentWord += letter.getLetter() + " ";
  });
  return currentWord;
};

Word.prototype.checkWordForLetter = function(keyPressed) {
  this.randomWord.forEach(letter => {
    letter.checkGuessedLetter(keyPressed);
  });
};

module.exports = Word;
