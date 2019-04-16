let Letter = function(char) {
  this.letter = char;
  this.isGuessed = false;
};

Letter.prototype.getLetter = () => {
  if (this.isGuessed) {
    return this.letter;
  }

  return "_";
};

Letter.prototype.checkGuessedLetter = guessedLetter => {
  if (guessedLetter === this.letter) {
    this.isGuessed = true;
  }
};

module.exports = Letter;
