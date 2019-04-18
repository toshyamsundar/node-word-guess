let Letter = require("./letter");

let Word = function(selectedWord) {
  this.randomWord = [];
  this.isCorrectLetter = false;
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

Word.prototype.checkWordForLetter = function(guessedLetter) {
  this.isCorrectLetter = false;
  this.randomWord.forEach(letter => {
    if (!letter.isGuessed) {
      if (letter.checkGuessedLetter(guessedLetter)) {
        this.isCorrectLetter = true;
      }
    }
  });
  return this.isCorrectLetter;
};

Word.prototype.showFullWord = function() {
  this.randomWord.forEach(letter => {
    if (!letter.isGuessed) {
      letter.showLetter();
    }
  });
};

module.exports = Word;
