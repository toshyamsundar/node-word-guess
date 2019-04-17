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
  console.log(`Checking ${guessedLetter} in Word`);
  this.randomWord.forEach(letter => {
    if (letter.checkGuessedLetter(guessedLetter)) {
      this.isCorrectLetter = true;
    }
  });
  return this.isCorrectLetter;
};

module.exports = Word;
