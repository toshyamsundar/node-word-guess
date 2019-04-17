let Letter = function(char) {
  this.letter = char;
  this.isGuessed = false;
};

Letter.prototype.getLetter = function() {
  if (this.isGuessed) {
    return this.letter;
  }

  return "_";
};

Letter.prototype.checkGuessedLetter = function(guessedLetter) {
  console.log(`Guessed: ${guessedLetter}`);
  console.log(`Letter this: ${this.letter}`);
  if (guessedLetter === this.letter) {
    this.isGuessed = true;
  }
  return this.isGuessed;
};

module.exports = Letter;
