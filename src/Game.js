const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {}

  start() {
    const cards = []
    prototypeQuestions.forEach(question => {
      cards.push(new Card(question.id, question.question, question.answers, question.correctAnswer))
    })
    const deck = new Deck(cards)
    this.currentRound = new Round(deck)
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
