let letter = require("./letter");

let Word = function(selectedWord) {
  let randomWord = [];
  for (let i = 0; i < selectedWord.length; i++) {
    randomWord[i] = new letter(selectedWord[i]);
  }
};

Word.prototype.getWord = () => {
  let currentWord = "";
  randomWord.forEach(letter => {
    currentWord += letter.getLetter();
  });
  console.log(`currentWord: ${currentWord}`);
};

Word.prototype.checkWordForLetter = keyPressed => {
  letter.checkGuessedLetter(keyPressed);
};
