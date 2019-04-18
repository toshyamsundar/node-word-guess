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
  if (guessedLetter === this.letter) {
    this.isGuessed = true;
  }
  return this.isGuessed;
};

Letter.prototype.showLetter = function() {
  this.isGuessed = true;
};

module.exports = Letter;
