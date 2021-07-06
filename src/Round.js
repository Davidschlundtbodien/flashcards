const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  calculatePercentCorrect() {
    let total = this.deck.cards.length;
    let incorrect = this.incorrectGuesses.length;
    let correct = total - incorrect
    return Math.round((correct / total) * 100)
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard())
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.returnCard().id)
    }
    this.turns ++
    return turn.giveFeedback()
  }
}

module.exports = Round;
