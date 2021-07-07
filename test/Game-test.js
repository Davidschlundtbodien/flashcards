const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Game = require('../src/Game')

describe('Game', function () {
  it('should keep track of the current round', function () {
    const game = new Game()
    expect(game.currentRound).to.equal(undefined)
  })
  describe('start', function () {

    const game = new Game()
    game.start()

    it('should create cards', function () {
      expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card)
    })

    it('should put Cards into a Deck', function () {
      expect(game.currentRound.deck.countCards()).to.equal(prototypeQuestions.length)
    })

    it('should create a new Round using the Deck', function () {
      expect(game.currentRound.deck).to.be.an.instanceof(Deck)
    })
  })

})
