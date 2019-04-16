let Letter = require("./letter");

let randomWord = [];

let Word = function(selectedWord) {
  for (let i = 0; i < selectedWord.length; i++) {
    randomWord.push(new Letter(selectedWord[i]));
  }
};

Word.prototype.getWord = function() {
  let currentWord = "";
  randomWord.forEach(letter => {
    currentWord += letter.getLetter() + " ";
  });
  console.log(`currentWord: ${currentWord}`);
};

Word.prototype.checkWordForLetter = function(keyPressed) {
  randomWord.forEach(letter => {
    letter.checkGuessedLetter(keyPressed);
  });
};

module.exports = Word;
