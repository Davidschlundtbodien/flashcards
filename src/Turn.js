class Turn {
  constructor(guess, card) {
    this.userGuess = guess
    this.currentCard = card
  }

  returnGuess() {
    return this.userGuess
  }

  returnCard() {
    return this.currentCard
  }

  evaluateGuess() {
    let guess = this.userGuess
    let answer = this.currentCard.correctAnswer
    return guess === answer
  }

  giveFeedback() {
    return this.evaluateGuess() ? 'correct!' : 'incorrect!'
  }
}

module.exports = Turn;
